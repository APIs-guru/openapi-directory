from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class PathComponent:
    r"""PathComponent
    Describes a path component.
    """
    
    acl_rule: Optional[AnalysisACLRule] = field(default=None)
    component: Optional[AnalysisComponent] = field(default=None)
    destination_vpc: Optional[AnalysisComponent] = field(default=None)
    inbound_header: Optional[AnalysisPacketHeader] = field(default=None)
    outbound_header: Optional[AnalysisPacketHeader] = field(default=None)
    route_table_route: Optional[AnalysisRouteTableRoute] = field(default=None)
    security_group_rule: Optional[AnalysisSecurityGroupRule] = field(default=None)
    sequence_number: Optional[int] = field(default=None)
    source_vpc: Optional[AnalysisComponent] = field(default=None)
    subnet: Optional[AnalysisComponent] = field(default=None)
    vpc: Optional[AnalysisComponent] = field(default=None)
    
