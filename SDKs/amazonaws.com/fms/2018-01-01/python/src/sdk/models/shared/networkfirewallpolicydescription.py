from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NetworkFirewallPolicyDescription:
    r"""NetworkFirewallPolicyDescription
    The definition of the Network Firewall firewall policy.
    """
    
    stateful_rule_groups: Optional[List[StatefulRuleGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatefulRuleGroups') }})
    stateless_custom_actions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatelessCustomActions') }})
    stateless_default_actions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatelessDefaultActions') }})
    stateless_fragment_default_actions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatelessFragmentDefaultActions') }})
    stateless_rule_groups: Optional[List[StatelessRuleGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatelessRuleGroups') }})
    
