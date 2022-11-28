from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class UpdateImagePermissionsXAmzTargetEnum(str, Enum):
    PHOTON_ADMIN_PROXY_SERVICE_UPDATE_IMAGE_PERMISSIONS = "PhotonAdminProxyService.UpdateImagePermissions"


@dataclass
class UpdateImagePermissionsHeaders:
    x_amz_target: UpdateImagePermissionsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateImagePermissionsRequest:
    headers: UpdateImagePermissionsHeaders = field()
    request: shared.UpdateImagePermissionsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateImagePermissionsResponse:
    content_type: str = field()
    status_code: int = field()
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_available_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    update_image_permissions_result: Optional[dict[str, Any]] = field(default=None)
    
