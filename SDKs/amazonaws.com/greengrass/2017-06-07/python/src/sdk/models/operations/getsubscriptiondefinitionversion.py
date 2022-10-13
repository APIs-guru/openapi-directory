from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetSubscriptionDefinitionVersionPathParams:
    subscription_definition_id: str = field(default=None, metadata={'path_param': { 'field_name': 'SubscriptionDefinitionId', 'style': 'simple', 'explode': False }})
    subscription_definition_version_id: str = field(default=None, metadata={'path_param': { 'field_name': 'SubscriptionDefinitionVersionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubscriptionDefinitionVersionQueryParams:
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSubscriptionDefinitionVersionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetSubscriptionDefinitionVersionRequest:
    path_params: GetSubscriptionDefinitionVersionPathParams = field(default=None)
    query_params: GetSubscriptionDefinitionVersionQueryParams = field(default=None)
    headers: GetSubscriptionDefinitionVersionHeaders = field(default=None)
    

@dataclass
class GetSubscriptionDefinitionVersionResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_subscription_definition_version_response: Optional[shared.GetSubscriptionDefinitionVersionResponse] = field(default=None)
    status_code: int = field(default=None)
    
