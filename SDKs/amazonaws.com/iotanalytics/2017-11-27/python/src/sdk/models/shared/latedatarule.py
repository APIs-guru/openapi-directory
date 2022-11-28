from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LateDataRule:
    r"""LateDataRule
    A structure that contains the name and configuration information of a late data rule.
    """
    
    rule_configuration: LateDataRuleConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleConfiguration') }})
    rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleName') }})
    
