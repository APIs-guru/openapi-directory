from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DeleteHsmXAmzTargetEnum(str, Enum):
    CLOUD_HSM_FRONTEND_SERVICE_DELETE_HSM = "CloudHsmFrontendService.DeleteHsm"


@dataclass
class DeleteHsmHeaders:
    x_amz_target: DeleteHsmXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteHsmRequest:
    headers: DeleteHsmHeaders = field()
    request: shared.DeleteHsmRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteHsmResponse:
    content_type: str = field()
    status_code: int = field()
    cloud_hsm_internal_exception: Optional[Any] = field(default=None)
    cloud_hsm_service_exception: Optional[Any] = field(default=None)
    delete_hsm_response: Optional[shared.DeleteHsmResponse] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    
