from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceViolation:
    r"""ResourceViolation
    Violation detail based on resource type.
    """
    
    aws_ec2_instance_violation: Optional[AwsEc2InstanceViolation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEc2InstanceViolation') }})
    aws_ec2_network_interface_violation: Optional[AwsEc2NetworkInterfaceViolation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEc2NetworkInterfaceViolation') }})
    aws_vpc_security_group_violation: Optional[AwsVpcSecurityGroupViolation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsVPCSecurityGroupViolation') }})
    dns_duplicate_rule_group_violation: Optional[DNSDuplicateRuleGroupViolation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsDuplicateRuleGroupViolation') }})
    dns_rule_group_limit_exceeded_violation: Optional[DNSRuleGroupLimitExceededViolation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsRuleGroupLimitExceededViolation') }})
    dns_rule_group_priority_conflict_violation: Optional[DNSRuleGroupPriorityConflictViolation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsRuleGroupPriorityConflictViolation') }})
    network_firewall_black_hole_route_detected_violation: Optional[NetworkFirewallBlackHoleRouteDetectedViolation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkFirewallBlackHoleRouteDetectedViolation') }})
    network_firewall_internet_traffic_not_inspected_violation: Optional[NetworkFirewallInternetTrafficNotInspectedViolation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkFirewallInternetTrafficNotInspectedViolation') }})
    network_firewall_invalid_route_configuration_violation: Optional[NetworkFirewallInvalidRouteConfigurationViolation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkFirewallInvalidRouteConfigurationViolation') }})
    network_firewall_missing_expected_rt_violation: Optional[NetworkFirewallMissingExpectedRtViolation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkFirewallMissingExpectedRTViolation') }})
    network_firewall_missing_expected_routes_violation: Optional[NetworkFirewallMissingExpectedRoutesViolation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkFirewallMissingExpectedRoutesViolation') }})
    network_firewall_missing_firewall_violation: Optional[NetworkFirewallMissingFirewallViolation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkFirewallMissingFirewallViolation') }})
    network_firewall_missing_subnet_violation: Optional[NetworkFirewallMissingSubnetViolation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkFirewallMissingSubnetViolation') }})
    network_firewall_policy_modified_violation: Optional[NetworkFirewallPolicyModifiedViolation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkFirewallPolicyModifiedViolation') }})
    network_firewall_unexpected_firewall_routes_violation: Optional[NetworkFirewallUnexpectedFirewallRoutesViolation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkFirewallUnexpectedFirewallRoutesViolation') }})
    network_firewall_unexpected_gateway_routes_violation: Optional[NetworkFirewallUnexpectedGatewayRoutesViolation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkFirewallUnexpectedGatewayRoutesViolation') }})
    possible_remediation_actions: Optional[PossibleRemediationActions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PossibleRemediationActions') }})
    
