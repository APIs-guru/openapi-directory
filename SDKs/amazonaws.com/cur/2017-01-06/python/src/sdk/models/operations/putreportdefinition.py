from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PutReportDefinitionXAmzTargetEnum(str, Enum):
    AWS_ORIGAMI_SERVICE_GATEWAY_SERVICE_PUT_REPORT_DEFINITION = "AWSOrigamiServiceGatewayService.PutReportDefinition"


@dataclass
class PutReportDefinitionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: PutReportDefinitionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutReportDefinitionRequest:
    headers: PutReportDefinitionHeaders = field(default=None)
    request: shared.PutReportDefinitionRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutReportDefinitionResponse:
    content_type: str = field(default=None)
    duplicate_report_name_exception: Optional[Any] = field(default=None)
    internal_error_exception: Optional[Any] = field(default=None)
    put_report_definition_response: Optional[dict[str, Any]] = field(default=None)
    report_limit_reached_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
