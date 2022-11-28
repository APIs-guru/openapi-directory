from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DeleteLunaClientXAmzTargetEnum(str, Enum):
    CLOUD_HSM_FRONTEND_SERVICE_DELETE_LUNA_CLIENT = "CloudHsmFrontendService.DeleteLunaClient"


@dataclass
class DeleteLunaClientHeaders:
    x_amz_target: DeleteLunaClientXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLunaClientRequest:
    headers: DeleteLunaClientHeaders = field()
    request: shared.DeleteLunaClientRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteLunaClientResponse:
    content_type: str = field()
    status_code: int = field()
    cloud_hsm_internal_exception: Optional[Any] = field(default=None)
    cloud_hsm_service_exception: Optional[Any] = field(default=None)
    delete_luna_client_response: Optional[shared.DeleteLunaClientResponse] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    
