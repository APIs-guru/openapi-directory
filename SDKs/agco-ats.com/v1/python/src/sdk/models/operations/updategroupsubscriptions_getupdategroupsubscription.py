from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateGroupSubscriptionsGetUpdateGroupSubscriptionPathParams:
    update_group_subscription_id: int = field(default=None, metadata={'path_param': { 'field_name': 'UpdateGroupSubscriptionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGroupSubscriptionsGetUpdateGroupSubscriptionRequest:
    path_params: UpdateGroupSubscriptionsGetUpdateGroupSubscriptionPathParams = field(default=None)
    

@dataclass
class UpdateGroupSubscriptionsGetUpdateGroupSubscriptionResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_system_models_update_group_subscription: Optional[shared.UpdateSystemModelsUpdateGroupSubscription] = field(default=None)
    
