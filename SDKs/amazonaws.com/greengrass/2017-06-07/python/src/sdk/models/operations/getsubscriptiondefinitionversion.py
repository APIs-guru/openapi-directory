from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetSubscriptionDefinitionVersionPathParams:
    subscription_definition_id: str = field(metadata={'path_param': { 'field_name': 'SubscriptionDefinitionId', 'style': 'simple', 'explode': False }})
    subscription_definition_version_id: str = field(metadata={'path_param': { 'field_name': 'SubscriptionDefinitionVersionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubscriptionDefinitionVersionQueryParams:
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSubscriptionDefinitionVersionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubscriptionDefinitionVersionRequest:
    headers: GetSubscriptionDefinitionVersionHeaders = field()
    path_params: GetSubscriptionDefinitionVersionPathParams = field()
    query_params: GetSubscriptionDefinitionVersionQueryParams = field()
    

@dataclass
class GetSubscriptionDefinitionVersionResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    get_subscription_definition_version_response: Optional[shared.GetSubscriptionDefinitionVersionResponse] = field(default=None)
    
