from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateImageBuilderXAmzTargetEnum(str, Enum):
    PHOTON_ADMIN_PROXY_SERVICE_CREATE_IMAGE_BUILDER = "PhotonAdminProxyService.CreateImageBuilder"


@dataclass
class CreateImageBuilderHeaders:
    x_amz_target: CreateImageBuilderXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateImageBuilderRequest:
    headers: CreateImageBuilderHeaders = field()
    request: shared.CreateImageBuilderRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateImageBuilderResponse:
    content_type: str = field()
    status_code: int = field()
    concurrent_modification_exception: Optional[Any] = field(default=None)
    create_image_builder_result: Optional[shared.CreateImageBuilderResult] = field(default=None)
    incompatible_image_exception: Optional[Any] = field(default=None)
    invalid_account_status_exception: Optional[Any] = field(default=None)
    invalid_parameter_combination_exception: Optional[Any] = field(default=None)
    invalid_role_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    operation_not_permitted_exception: Optional[Any] = field(default=None)
    request_limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    resource_not_available_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    
