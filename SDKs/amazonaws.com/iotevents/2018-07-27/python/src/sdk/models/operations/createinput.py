from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateInputHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateInputRequestBodyInputDefinition:
    attributes: Optional[List[shared.Attribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    

@dataclass_json
@dataclass
class CreateInputRequestBody:
    input_definition: CreateInputRequestBodyInputDefinition = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputDefinition' }})
    input_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputDescription' }})
    input_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputName' }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateInputRequest:
    headers: CreateInputHeaders = field(default=None)
    request: CreateInputRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateInputResponse:
    content_type: str = field(default=None)
    create_input_response: Optional[shared.CreateInputResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
