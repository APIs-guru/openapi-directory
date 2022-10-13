from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateAddonPathParams:
    addon_name: str = field(default=None, metadata={'path_param': { 'field_name': 'addonName', 'style': 'simple', 'explode': False }})
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAddonHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class UpdateAddonRequestBodyResolveConflictsEnum(str, Enum):
    OVERWRITE = "OVERWRITE"
    NONE = "NONE"


@dataclass_json
@dataclass
class UpdateAddonRequestBody:
    addon_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addonVersion' }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    resolve_conflicts: Optional[UpdateAddonRequestBodyResolveConflictsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolveConflicts' }})
    service_account_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccountRoleArn' }})
    

@dataclass
class UpdateAddonRequest:
    path_params: UpdateAddonPathParams = field(default=None)
    headers: UpdateAddonHeaders = field(default=None)
    request: UpdateAddonRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAddonResponse:
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_addon_response: Optional[shared.UpdateAddonResponse] = field(default=None)
    
