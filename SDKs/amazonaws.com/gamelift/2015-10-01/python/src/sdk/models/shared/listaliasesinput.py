from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAliasesInput:
    r"""ListAliasesInput
    Represents the input for a request operation.
    """
    
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    routing_strategy_type: Optional[RoutingStrategyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoutingStrategyType') }})
    
