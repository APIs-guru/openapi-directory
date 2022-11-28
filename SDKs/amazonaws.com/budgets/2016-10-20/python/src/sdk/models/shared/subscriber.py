from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Subscriber:
    r"""Subscriber
    <p>The subscriber to a budget notification. The subscriber consists of a subscription type and either an Amazon SNS topic or an email address.</p> <p>For example, an email subscriber would have the following parameters:</p> <ul> <li> <p>A <code>subscriptionType</code> of <code>EMAIL</code> </p> </li> <li> <p>An <code>address</code> of <code>example@example.com</code> </p> </li> </ul>
    """
    
    address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address') }})
    subscription_type: SubscriptionTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscriptionType') }})
    
