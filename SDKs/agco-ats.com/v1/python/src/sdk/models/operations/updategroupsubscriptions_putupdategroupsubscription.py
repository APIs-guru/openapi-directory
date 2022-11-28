from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateGroupSubscriptionsPutUpdateGroupSubscriptionPathParams:
    update_group_subscription_id: int = field(metadata={'path_param': { 'field_name': 'UpdateGroupSubscriptionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    update_system_models_update_group_subscription: Optional[shared.UpdateSystemModelsUpdateGroupSubscription] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_system_models_update_group_subscription1: Optional[shared.UpdateSystemModelsUpdateGroupSubscription] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    update_system_models_update_group_subscription2: Optional[shared.UpdateSystemModelsUpdateGroupSubscription] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequest:
    path_params: UpdateGroupSubscriptionsPutUpdateGroupSubscriptionPathParams = field()
    request: UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequests = field()
    

@dataclass
class UpdateGroupSubscriptionsPutUpdateGroupSubscriptionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
