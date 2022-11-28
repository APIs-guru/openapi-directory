from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateMeshPathParams:
    mesh_name: str = field(metadata={'path_param': { 'field_name': 'meshName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMeshHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateMeshRequestBodySpec:
    r"""UpdateMeshRequestBodySpec
    An object that represents the specification of a service mesh.
    """
    
    egress_filter: Optional[shared.EgressFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('egressFilter') }})
    

@dataclass_json
@dataclass
class UpdateMeshRequestBody:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    spec: Optional[UpdateMeshRequestBodySpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    

@dataclass
class UpdateMeshRequest:
    headers: UpdateMeshHeaders = field()
    path_params: UpdateMeshPathParams = field()
    request: UpdateMeshRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateMeshResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_mesh_output: Optional[shared.UpdateMeshOutput] = field(default=None)
    
