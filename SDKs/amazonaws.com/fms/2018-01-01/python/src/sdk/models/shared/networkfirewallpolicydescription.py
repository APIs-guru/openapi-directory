from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import statefulrulegroup
from . import statelessrulegroup


@dataclass_json
@dataclass
class NetworkFirewallPolicyDescription:
    stateful_rule_groups: Optional[List[statefulrulegroup.StatefulRuleGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatefulRuleGroups' }})
    stateless_custom_actions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatelessCustomActions' }})
    stateless_default_actions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatelessDefaultActions' }})
    stateless_fragment_default_actions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatelessFragmentDefaultActions' }})
    stateless_rule_groups: Optional[List[statelessrulegroup.StatelessRuleGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatelessRuleGroups' }})
    
