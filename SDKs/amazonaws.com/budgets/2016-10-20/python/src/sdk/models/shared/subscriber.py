from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import subscriptiontype_enum


@dataclass_json
@dataclass
class Subscriber:
    address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address' }})
    subscription_type: subscriptiontype_enum.SubscriptionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubscriptionType' }})
    
