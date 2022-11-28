from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateGroupSubscriptionsGetUpdateGroupSubscriptionPathParams:
    update_group_subscription_id: int = field(metadata={'path_param': { 'field_name': 'UpdateGroupSubscriptionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGroupSubscriptionsGetUpdateGroupSubscriptionRequest:
    path_params: UpdateGroupSubscriptionsGetUpdateGroupSubscriptionPathParams = field()
    

@dataclass
class UpdateGroupSubscriptionsGetUpdateGroupSubscriptionResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    update_system_models_update_group_subscription: Optional[shared.UpdateSystemModelsUpdateGroupSubscription] = field(default=None)
    
