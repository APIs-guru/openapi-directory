from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutReportDefinitionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutReportDefinitionRequestBodyDestinationS3Location:
    r"""PutReportDefinitionRequestBodyDestinationS3Location
    Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.
    """
    
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket') }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    
class PutReportDefinitionRequestBodyFormatEnum(str, Enum):
    CSV = "CSV"
    PARQUET = "PARQUET"

class PutReportDefinitionRequestBodyReportFrequencyEnum(str, Enum):
    MONTHLY = "MONTHLY"
    DAILY = "DAILY"
    ALL = "ALL"


@dataclass_json
@dataclass
class PutReportDefinitionRequestBody:
    destination_s3_location: PutReportDefinitionRequestBodyDestinationS3Location = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationS3Location') }})
    format: PutReportDefinitionRequestBodyFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    report_description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportDescription') }})
    report_frequency: PutReportDefinitionRequestBodyReportFrequencyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportFrequency') }})
    report_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportId') }})
    

@dataclass
class PutReportDefinitionRequest:
    headers: PutReportDefinitionHeaders = field()
    request: PutReportDefinitionRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutReportDefinitionResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    put_report_definition_result: Optional[shared.PutReportDefinitionResult] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
