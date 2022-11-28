from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListNotificationRulesFilter:
    r"""ListNotificationRulesFilter
    Information about a filter to apply to the list of returned notification rules. You can filter by event type, owner, resource, or target.
    """
    
    name: ListNotificationRulesFilterNameEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
