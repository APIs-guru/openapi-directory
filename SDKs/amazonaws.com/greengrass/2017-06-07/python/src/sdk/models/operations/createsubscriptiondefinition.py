from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateSubscriptionDefinitionHeaders:
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
class CreateSubscriptionDefinitionRequestBodyInitialVersion:
    subscriptions: Optional[List[shared.Subscription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subscriptions' }})
    

@dataclass_json
@dataclass
class CreateSubscriptionDefinitionRequestBody:
    initial_version: Optional[CreateSubscriptionDefinitionRequestBodyInitialVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InitialVersion' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateSubscriptionDefinitionRequest:
    headers: CreateSubscriptionDefinitionHeaders = field(default=None)
    request: CreateSubscriptionDefinitionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateSubscriptionDefinitionResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_subscription_definition_response: Optional[shared.CreateSubscriptionDefinitionResponse] = field(default=None)
    status_code: int = field(default=None)
    
