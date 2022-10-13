from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import portrange


@dataclass_json
@dataclass
class BlockPublicAccessConfiguration:
    block_public_security_group_rules: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlockPublicSecurityGroupRules' }})
    permitted_public_security_group_rule_ranges: Optional[List[portrange.PortRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermittedPublicSecurityGroupRuleRanges' }})
    
