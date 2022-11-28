from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BlockPublicAccessConfiguration:
    r"""BlockPublicAccessConfiguration
    A configuration for Amazon EMR block public access. When <code>BlockPublicSecurityGroupRules</code> is set to <code>true</code>, Amazon EMR prevents cluster creation if one of the cluster's security groups has a rule that allows inbound traffic from 0.0.0.0/0 or ::/0 on a port, unless the port is specified as an exception using <code>PermittedPublicSecurityGroupRuleRanges</code>.
    """
    
    block_public_security_group_rules: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlockPublicSecurityGroupRules') }})
    permitted_public_security_group_rule_ranges: Optional[List[PortRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermittedPublicSecurityGroupRuleRanges') }})
    
