from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetTopicRuleResponse:
    r"""GetTopicRuleResponse
    The output from the GetTopicRule operation.
    """
    
    rule: Optional[TopicRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule') }})
    rule_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleArn') }})
    
