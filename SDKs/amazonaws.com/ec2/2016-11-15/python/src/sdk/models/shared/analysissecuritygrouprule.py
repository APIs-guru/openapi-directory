from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class AnalysisSecurityGroupRule:
    r"""AnalysisSecurityGroupRule
    Describes a security group rule.
    """
    
    cidr: Optional[str] = field(default=None)
    direction: Optional[str] = field(default=None)
    port_range: Optional[PortRange] = field(default=None)
    prefix_list_id: Optional[str] = field(default=None)
    protocol: Optional[str] = field(default=None)
    security_group_id: Optional[str] = field(default=None)
    
