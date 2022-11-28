from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateSystemModelsAvailableUpdateGroupSubscription:
    available_subscriptions: Optional[List[UpdateSystemModelsAvailableSubscription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailableSubscriptions') }})
    update_group: Optional[UpdateSystemModelsUpdateGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateGroup') }})
    
