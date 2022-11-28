from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateSubscriptionDefinitionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amzn_client_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amzn-Client-Token', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateSubscriptionDefinitionRequestBodyInitialVersion:
    r"""CreateSubscriptionDefinitionRequestBodyInitialVersion
    Information about a subscription definition version.
    """
    
    subscriptions: Optional[List[shared.Subscription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subscriptions') }})
    

@dataclass_json
@dataclass
class CreateSubscriptionDefinitionRequestBody:
    initial_version: Optional[CreateSubscriptionDefinitionRequestBodyInitialVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InitialVersion') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateSubscriptionDefinitionRequest:
    headers: CreateSubscriptionDefinitionHeaders = field()
    request: CreateSubscriptionDefinitionRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateSubscriptionDefinitionResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    create_subscription_definition_response: Optional[shared.CreateSubscriptionDefinitionResponse] = field(default=None)
    
