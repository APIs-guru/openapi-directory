from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class Explanation:
    r"""Explanation
    Describes an explanation code for an unreachable path. For more information, see <a href=\"https://docs.aws.amazon.com/vpc/latest/reachability/explanation-codes.html\">Reachability Analyzer explanation codes</a>.
    """
    
    acl: Optional[AnalysisComponent] = field(default=None)
    acl_rule: Optional[AnalysisACLRule] = field(default=None)
    address: Optional[str] = field(default=None)
    addresses: Optional[List[str]] = field(default=None)
    attached_to: Optional[AnalysisComponent] = field(default=None)
    availability_zones: Optional[List[str]] = field(default=None)
    cidrs: Optional[List[str]] = field(default=None)
    classic_load_balancer_listener: Optional[AnalysisLoadBalancerListener] = field(default=None)
    component: Optional[AnalysisComponent] = field(default=None)
    customer_gateway: Optional[AnalysisComponent] = field(default=None)
    destination: Optional[AnalysisComponent] = field(default=None)
    destination_vpc: Optional[AnalysisComponent] = field(default=None)
    direction: Optional[str] = field(default=None)
    elastic_load_balancer_listener: Optional[AnalysisComponent] = field(default=None)
    explanation_code: Optional[str] = field(default=None)
    ingress_route_table: Optional[AnalysisComponent] = field(default=None)
    internet_gateway: Optional[AnalysisComponent] = field(default=None)
    load_balancer_arn: Optional[str] = field(default=None)
    load_balancer_listener_port: Optional[int] = field(default=None)
    load_balancer_target: Optional[AnalysisLoadBalancerTarget] = field(default=None)
    load_balancer_target_group: Optional[AnalysisComponent] = field(default=None)
    load_balancer_target_groups: Optional[List[AnalysisComponent]] = field(default=None)
    load_balancer_target_port: Optional[int] = field(default=None)
    missing_component: Optional[str] = field(default=None)
    nat_gateway: Optional[AnalysisComponent] = field(default=None)
    network_interface: Optional[AnalysisComponent] = field(default=None)
    packet_field: Optional[str] = field(default=None)
    port: Optional[int] = field(default=None)
    port_ranges: Optional[List[PortRange]] = field(default=None)
    prefix_list: Optional[AnalysisComponent] = field(default=None)
    protocols: Optional[List[str]] = field(default=None)
    route_table: Optional[AnalysisComponent] = field(default=None)
    route_table_route: Optional[AnalysisRouteTableRoute] = field(default=None)
    security_group: Optional[AnalysisComponent] = field(default=None)
    security_group_rule: Optional[AnalysisSecurityGroupRule] = field(default=None)
    security_groups: Optional[List[AnalysisComponent]] = field(default=None)
    source_vpc: Optional[AnalysisComponent] = field(default=None)
    state: Optional[str] = field(default=None)
    subnet: Optional[AnalysisComponent] = field(default=None)
    subnet_route_table: Optional[AnalysisComponent] = field(default=None)
    vpc: Optional[AnalysisComponent] = field(default=None)
    vpc_endpoint: Optional[AnalysisComponent] = field(default=None)
    vpc_peering_connection: Optional[AnalysisComponent] = field(default=None)
    vpn_connection: Optional[AnalysisComponent] = field(default=None)
    vpn_gateway: Optional[AnalysisComponent] = field(default=None)
    
