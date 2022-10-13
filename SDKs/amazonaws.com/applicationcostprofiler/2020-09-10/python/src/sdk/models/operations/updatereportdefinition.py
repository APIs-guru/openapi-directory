from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateReportDefinitionPathParams:
    report_id: str = field(default=None, metadata={'path_param': { 'field_name': 'reportId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateReportDefinitionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateReportDefinitionRequestBodyDestinationS3Location:
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucket' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix' }})
    
class UpdateReportDefinitionRequestBodyFormatEnum(str, Enum):
    CSV = "CSV"
    PARQUET = "PARQUET"

class UpdateReportDefinitionRequestBodyReportFrequencyEnum(str, Enum):
    MONTHLY = "MONTHLY"
    DAILY = "DAILY"
    ALL = "ALL"


@dataclass_json
@dataclass
class UpdateReportDefinitionRequestBody:
    destination_s3_location: UpdateReportDefinitionRequestBodyDestinationS3Location = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationS3Location' }})
    format: UpdateReportDefinitionRequestBodyFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    report_description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportDescription' }})
    report_frequency: UpdateReportDefinitionRequestBodyReportFrequencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportFrequency' }})
    

@dataclass
class UpdateReportDefinitionRequest:
    path_params: UpdateReportDefinitionPathParams = field(default=None)
    headers: UpdateReportDefinitionHeaders = field(default=None)
    request: UpdateReportDefinitionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateReportDefinitionResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_report_definition_result: Optional[shared.UpdateReportDefinitionResult] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
