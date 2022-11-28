from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionPathParams:
    update_group_subscription_id: int = field(metadata={'path_param': { 'field_name': 'UpdateGroupSubscriptionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionRequest:
    path_params: UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionPathParams = field()
    

@dataclass
class UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
