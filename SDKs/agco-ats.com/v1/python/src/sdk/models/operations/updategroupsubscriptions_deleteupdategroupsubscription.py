from dataclasses import dataclass, field



@dataclass
class UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionPathParams:
    update_group_subscription_id: int = field(default=None, metadata={'path_param': { 'field_name': 'UpdateGroupSubscriptionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionRequest:
    path_params: UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionPathParams = field(default=None)
    

@dataclass
class UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
