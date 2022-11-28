from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StatefulRuleGroup:
    r"""StatefulRuleGroup
    Network Firewall stateful rule group, used in a <a>NetworkFirewallPolicyDescription</a>. 
    """
    
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    rule_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleGroupName') }})
    
