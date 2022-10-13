from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExpectedRoute:
    allowed_targets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowedTargets' }})
    contributing_subnets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContributingSubnets' }})
    ip_v4_cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpV4Cidr' }})
    ip_v6_cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpV6Cidr' }})
    prefix_list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrefixListId' }})
    route_table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RouteTableId' }})
    
