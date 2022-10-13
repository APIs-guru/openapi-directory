from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateInputPathParams:
    input_name: str = field(default=None, metadata={'path_param': { 'field_name': 'inputName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateInputHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateInputRequestBodyInputDefinition:
    attributes: Optional[List[shared.Attribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    

@dataclass_json
@dataclass
class UpdateInputRequestBody:
    input_definition: UpdateInputRequestBodyInputDefinition = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputDefinition' }})
    input_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputDescription' }})
    

@dataclass
class UpdateInputRequest:
    path_params: UpdateInputPathParams = field(default=None)
    headers: UpdateInputHeaders = field(default=None)
    request: UpdateInputRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateInputResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_input_response: Optional[shared.UpdateInputResponse] = field(default=None)
    
