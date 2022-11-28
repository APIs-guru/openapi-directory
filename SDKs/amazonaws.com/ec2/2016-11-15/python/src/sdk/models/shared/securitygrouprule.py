from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class SecurityGroupRule:
    r"""SecurityGroupRule
    Describes a security group rule.
    """
    
    cidr_ipv4: Optional[str] = field(default=None)
    cidr_ipv6: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    from_port: Optional[int] = field(default=None)
    group_id: Optional[str] = field(default=None)
    group_owner_id: Optional[str] = field(default=None)
    ip_protocol: Optional[str] = field(default=None)
    is_egress: Optional[bool] = field(default=None)
    prefix_list_id: Optional[str] = field(default=None)
    referenced_group_info: Optional[ReferencedSecurityGroup] = field(default=None)
    security_group_rule_id: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    to_port: Optional[int] = field(default=None)
    
