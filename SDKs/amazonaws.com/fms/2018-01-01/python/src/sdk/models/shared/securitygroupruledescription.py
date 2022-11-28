from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SecurityGroupRuleDescription:
    r"""SecurityGroupRuleDescription
    Describes a set of permissions for a security group rule.
    """
    
    from_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FromPort') }})
    ipv4_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IPV4Range') }})
    ipv6_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IPV6Range') }})
    prefix_list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrefixListId') }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocol') }})
    to_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ToPort') }})
    
