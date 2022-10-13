from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateGroupSubscriptionsPostUpdateGroupSubscriptionRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    update_system_models_update_group_subscription: Optional[shared.UpdateSystemModelsUpdateGroupSubscription] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_system_models_update_group_subscription1: Optional[shared.UpdateSystemModelsUpdateGroupSubscription] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    update_system_models_update_group_subscription2: Optional[shared.UpdateSystemModelsUpdateGroupSubscription] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateGroupSubscriptionsPostUpdateGroupSubscriptionRequest:
    request: UpdateGroupSubscriptionsPostUpdateGroupSubscriptionRequests = field(default=None)
    

@dataclass
class UpdateGroupSubscriptionsPostUpdateGroupSubscriptionResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_group_subscriptions_post_update_group_subscription_200_application_json_int32_integer: Optional[int] = field(default=None)
    update_group_subscriptions_post_update_group_subscription_200_text_json_int32_integer: Optional[int] = field(default=None)
    
