from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class TrafficMirrorFilterRule:
    r"""TrafficMirrorFilterRule
    Describes the Traffic Mirror rule.
    """
    
    description: Optional[str] = field(default=None)
    destination_cidr_block: Optional[str] = field(default=None)
    destination_port_range: Optional[TrafficMirrorPortRange] = field(default=None)
    protocol: Optional[int] = field(default=None)
    rule_action: Optional[TrafficMirrorRuleActionEnum] = field(default=None)
    rule_number: Optional[int] = field(default=None)
    source_cidr_block: Optional[str] = field(default=None)
    source_port_range: Optional[TrafficMirrorPortRange] = field(default=None)
    traffic_direction: Optional[TrafficDirectionEnum] = field(default=None)
    traffic_mirror_filter_id: Optional[str] = field(default=None)
    traffic_mirror_filter_rule_id: Optional[str] = field(default=None)
    
