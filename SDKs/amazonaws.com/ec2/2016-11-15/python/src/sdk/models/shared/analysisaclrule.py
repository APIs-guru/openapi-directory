from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class AnalysisACLRule:
    r"""AnalysisACLRule
    Describes a network access control (ACL) rule.
    """
    
    cidr: Optional[str] = field(default=None)
    egress: Optional[bool] = field(default=None)
    port_range: Optional[PortRange] = field(default=None)
    protocol: Optional[str] = field(default=None)
    rule_action: Optional[str] = field(default=None)
    rule_number: Optional[int] = field(default=None)
    
