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
class ImportApplicationUsageHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ImportApplicationUsageRequestBodySourceS3Location:
    r"""ImportApplicationUsageRequestBodySourceS3Location
    Represents the Amazon Simple Storage Service (Amazon S3) location where usage data is read from.
    """
    
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    region: Optional[shared.S3BucketRegionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    

@dataclass_json
@dataclass
class ImportApplicationUsageRequestBody:
    source_s3_location: ImportApplicationUsageRequestBodySourceS3Location = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceS3Location') }})
    

@dataclass
class ImportApplicationUsageRequest:
    headers: ImportApplicationUsageHeaders = field()
    request: ImportApplicationUsageRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ImportApplicationUsageResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    import_application_usage_result: Optional[shared.ImportApplicationUsageResult] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
