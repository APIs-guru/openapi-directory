from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class ModifyReportDefinitionXAmzTargetEnum(str, Enum):
    AWS_ORIGAMI_SERVICE_GATEWAY_SERVICE_MODIFY_REPORT_DEFINITION = "AWSOrigamiServiceGatewayService.ModifyReportDefinition"


@dataclass
class ModifyReportDefinitionHeaders:
    x_amz_target: ModifyReportDefinitionXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ModifyReportDefinitionRequest:
    headers: ModifyReportDefinitionHeaders = field()
    request: shared.ModifyReportDefinitionRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ModifyReportDefinitionResponse:
    content_type: str = field()
    status_code: int = field()
    internal_error_exception: Optional[Any] = field(default=None)
    modify_report_definition_response: Optional[dict[str, Any]] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
