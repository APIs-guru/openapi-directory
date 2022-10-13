from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateGroupSubscriptionsPutUpdateGroupSubscriptionPathParams:
    update_group_subscription_id: int = field(default=None, metadata={'path_param': { 'field_name': 'UpdateGroupSubscriptionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    update_system_models_update_group_subscription: Optional[shared.UpdateSystemModelsUpdateGroupSubscription] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_system_models_update_group_subscription1: Optional[shared.UpdateSystemModelsUpdateGroupSubscription] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    update_system_models_update_group_subscription2: Optional[shared.UpdateSystemModelsUpdateGroupSubscription] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequest:
    path_params: UpdateGroupSubscriptionsPutUpdateGroupSubscriptionPathParams = field(default=None)
    request: UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequests = field(default=None)
    

@dataclass
class UpdateGroupSubscriptionsPutUpdateGroupSubscriptionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
