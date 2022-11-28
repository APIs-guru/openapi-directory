from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTopicRulesResponse:
    r"""ListTopicRulesResponse
    The output from the ListTopicRules operation.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    rules: Optional[List[TopicRuleListItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
