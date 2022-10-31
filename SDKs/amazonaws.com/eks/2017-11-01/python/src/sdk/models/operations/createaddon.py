from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateAddonPathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAddonHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateAddonRequestBodyResolveConflictsEnum(str, Enum):
    OVERWRITE = "OVERWRITE"
    NONE = "NONE"


@dataclass_json
@dataclass
class CreateAddonRequestBody:
    addon_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addonName' }})
    addon_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addonVersion' }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    resolve_conflicts: Optional[CreateAddonRequestBodyResolveConflictsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolveConflicts' }})
    service_account_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccountRoleArn' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateAddonRequest:
    path_params: CreateAddonPathParams = field(default=None)
    headers: CreateAddonHeaders = field(default=None)
    request: CreateAddonRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAddonResponse:
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_addon_response: Optional[shared.CreateAddonResponse] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
