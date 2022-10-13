from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateResourceDefinitionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amzn_client_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amzn-Client-Token' }})
    

@dataclass_json
@dataclass
class CreateResourceDefinitionRequestBodyInitialVersion:
    resources: Optional[List[shared.Resource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resources' }})
    

@dataclass_json
@dataclass
class CreateResourceDefinitionRequestBody:
    initial_version: Optional[CreateResourceDefinitionRequestBodyInitialVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InitialVersion' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateResourceDefinitionRequest:
    headers: CreateResourceDefinitionHeaders = field(default=None)
    request: CreateResourceDefinitionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateResourceDefinitionResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_resource_definition_response: Optional[shared.CreateResourceDefinitionResponse] = field(default=None)
    status_code: int = field(default=None)
    
