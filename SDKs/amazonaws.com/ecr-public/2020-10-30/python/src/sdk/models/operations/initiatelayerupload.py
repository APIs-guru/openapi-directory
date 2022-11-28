from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class InitiateLayerUploadXAmzTargetEnum(str, Enum):
    SPENCER_FRONTEND_SERVICE_INITIATE_LAYER_UPLOAD = "SpencerFrontendService.InitiateLayerUpload"


@dataclass
class InitiateLayerUploadHeaders:
    x_amz_target: InitiateLayerUploadXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class InitiateLayerUploadRequest:
    headers: InitiateLayerUploadHeaders = field()
    request: shared.InitiateLayerUploadRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class InitiateLayerUploadResponse:
    content_type: str = field()
    status_code: int = field()
    initiate_layer_upload_response: Optional[shared.InitiateLayerUploadResponse] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    registry_not_found_exception: Optional[Any] = field(default=None)
    repository_not_found_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    unsupported_command_exception: Optional[Any] = field(default=None)
    
