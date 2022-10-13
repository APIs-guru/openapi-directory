from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutReportDefinitionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class PutReportDefinitionRequestBodyDestinationS3Location:
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucket' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix' }})
    
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
    destination_s3_location: PutReportDefinitionRequestBodyDestinationS3Location = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationS3Location' }})
    format: PutReportDefinitionRequestBodyFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    report_description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportDescription' }})
    report_frequency: PutReportDefinitionRequestBodyReportFrequencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportFrequency' }})
    report_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportId' }})
    

@dataclass
class PutReportDefinitionRequest:
    headers: PutReportDefinitionHeaders = field(default=None)
    request: PutReportDefinitionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutReportDefinitionResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    put_report_definition_result: Optional[shared.PutReportDefinitionResult] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
