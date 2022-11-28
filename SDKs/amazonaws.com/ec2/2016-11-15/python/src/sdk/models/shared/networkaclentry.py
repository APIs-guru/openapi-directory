from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class NetworkACLEntry:
    r"""NetworkACLEntry
    Describes an entry in a network ACL.
    """
    
    cidr_block: Optional[str] = field(default=None)
    egress: Optional[bool] = field(default=None)
    icmp_type_code: Optional[IcmpTypeCode] = field(default=None)
    ipv6_cidr_block: Optional[str] = field(default=None)
    port_range: Optional[PortRange] = field(default=None)
    protocol: Optional[str] = field(default=None)
    rule_action: Optional[RuleActionEnum] = field(default=None)
    rule_number: Optional[int] = field(default=None)
    
