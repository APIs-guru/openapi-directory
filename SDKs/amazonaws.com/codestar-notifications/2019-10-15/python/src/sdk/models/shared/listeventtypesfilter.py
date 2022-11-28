from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListEventTypesFilter:
    r"""ListEventTypesFilter
    Information about a filter to apply to the list of returned event types. You can filter by resource type or service name.
    """
    
    name: ListEventTypesFilterNameEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
