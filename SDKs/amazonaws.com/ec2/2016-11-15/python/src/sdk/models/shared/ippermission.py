from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class IPPermission:
    r"""IPPermission
    Describes a set of permissions for a security group rule.
    """
    
    from_port: Optional[int] = field(default=None)
    ip_protocol: Optional[str] = field(default=None)
    ip_ranges: Optional[List[IPRange]] = field(default=None)
    ipv6_ranges: Optional[List[Ipv6Range]] = field(default=None)
    prefix_list_ids: Optional[List[PrefixListID]] = field(default=None)
    to_port: Optional[int] = field(default=None)
    user_id_group_pairs: Optional[List[UserIDGroupPair]] = field(default=None)
    
