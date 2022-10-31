from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateNodegroupVersionPathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    nodegroup_name: str = field(default=None, metadata={'path_param': { 'field_name': 'nodegroupName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateNodegroupVersionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNodegroupVersionRequestBodyLaunchTemplate:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass_json
@dataclass
class UpdateNodegroupVersionRequestBody:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'force' }})
    launch_template: Optional[UpdateNodegroupVersionRequestBodyLaunchTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchTemplate' }})
    release_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releaseVersion' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass
class UpdateNodegroupVersionRequest:
    path_params: UpdateNodegroupVersionPathParams = field(default=None)
    headers: UpdateNodegroupVersionHeaders = field(default=None)
    request: UpdateNodegroupVersionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNodegroupVersionResponse:
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_nodegroup_version_response: Optional[shared.UpdateNodegroupVersionResponse] = field(default=None)
    
