from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateSubscriptionDefinitionVersionPathParams:
    subscription_definition_id: str = field(default=None, metadata={'path_param': { 'field_name': 'SubscriptionDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSubscriptionDefinitionVersionHeaders:
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
class CreateSubscriptionDefinitionVersionRequestBody:
    subscriptions: Optional[List[shared.Subscription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subscriptions' }})
    

@dataclass
class CreateSubscriptionDefinitionVersionRequest:
    path_params: CreateSubscriptionDefinitionVersionPathParams = field(default=None)
    headers: CreateSubscriptionDefinitionVersionHeaders = field(default=None)
    request: CreateSubscriptionDefinitionVersionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateSubscriptionDefinitionVersionResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_subscription_definition_version_response: Optional[shared.CreateSubscriptionDefinitionVersionResponse] = field(default=None)
    status_code: int = field(default=None)
    
