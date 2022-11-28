from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTargetsFilter:
    r"""ListTargetsFilter
    Information about a filter to apply to the list of returned targets. You can filter by target type, address, or status. For example, to filter results to notification rules that have active Amazon SNS topics as targets, you could specify a ListTargetsFilter Name as TargetType and a Value of SNS, and a Name of TARGET_STATUS and a Value of ACTIVE.
    """
    
    name: ListTargetsFilterNameEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
