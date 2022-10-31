from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateVirtualNodePathParams:
    mesh_name: str = field(default=None, metadata={'path_param': { 'field_name': 'meshName', 'style': 'simple', 'explode': False }})
    virtual_node_name: str = field(default=None, metadata={'path_param': { 'field_name': 'virtualNodeName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateVirtualNodeQueryParams:
    mesh_owner: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'meshOwner', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateVirtualNodeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateVirtualNodeRequestBodySpec:
    backend_defaults: Optional[shared.BackendDefaults] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backendDefaults' }})
    backends: Optional[List[shared.Backend]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backends' }})
    listeners: Optional[List[shared.Listener]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listeners' }})
    logging: Optional[shared.Logging] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logging' }})
    service_discovery: Optional[shared.ServiceDiscovery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceDiscovery' }})
    

@dataclass_json
@dataclass
class UpdateVirtualNodeRequestBody:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    spec: UpdateVirtualNodeRequestBodySpec = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    

@dataclass
class UpdateVirtualNodeRequest:
    path_params: UpdateVirtualNodePathParams = field(default=None)
    query_params: UpdateVirtualNodeQueryParams = field(default=None)
    headers: UpdateVirtualNodeHeaders = field(default=None)
    request: UpdateVirtualNodeRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateVirtualNodeResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_virtual_node_output: Optional[shared.UpdateVirtualNodeOutput] = field(default=None)
    
