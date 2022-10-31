from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateApplicationXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_CREATE_APPLICATION = "CodeDeploy_20141006.CreateApplication"


@dataclass
class CreateApplicationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: CreateApplicationXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateApplicationRequest:
    headers: CreateApplicationHeaders = field(default=None)
    request: shared.CreateApplicationInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateApplicationResponse:
    application_already_exists_exception: Optional[Any] = field(default=None)
    application_limit_exceeded_exception: Optional[Any] = field(default=None)
    application_name_required_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_application_output: Optional[shared.CreateApplicationOutput] = field(default=None)
    invalid_application_name_exception: Optional[Any] = field(default=None)
    invalid_compute_platform_exception: Optional[Any] = field(default=None)
    invalid_tags_to_add_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
