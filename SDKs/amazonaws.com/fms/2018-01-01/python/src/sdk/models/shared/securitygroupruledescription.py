from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SecurityGroupRuleDescription:
    from_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FromPort' }})
    ipv4_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IPV4Range' }})
    ipv6_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IPV6Range' }})
    prefix_list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrefixListId' }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Protocol' }})
    to_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ToPort' }})
    
