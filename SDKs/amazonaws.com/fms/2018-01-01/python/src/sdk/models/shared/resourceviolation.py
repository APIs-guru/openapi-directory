from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awsec2instanceviolation
from . import awsec2networkinterfaceviolation
from . import awsvpcsecuritygroupviolation
from . import dnsduplicaterulegroupviolation
from . import dnsrulegrouplimitexceededviolation
from . import dnsrulegrouppriorityconflictviolation
from . import networkfirewallblackholeroutedetectedviolation
from . import networkfirewallinternettrafficnotinspectedviolation
from . import networkfirewallinvalidrouteconfigurationviolation
from . import networkfirewallmissingexpectedrtviolation
from . import networkfirewallmissingexpectedroutesviolation
from . import networkfirewallmissingfirewallviolation
from . import networkfirewallmissingsubnetviolation
from . import networkfirewallpolicymodifiedviolation
from . import networkfirewallunexpectedfirewallroutesviolation
from . import networkfirewallunexpectedgatewayroutesviolation
from . import possibleremediationactions


@dataclass_json
@dataclass
class ResourceViolation:
    aws_ec2_instance_violation: Optional[awsec2instanceviolation.AwsEc2InstanceViolation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsEc2InstanceViolation' }})
    aws_ec2_network_interface_violation: Optional[awsec2networkinterfaceviolation.AwsEc2NetworkInterfaceViolation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsEc2NetworkInterfaceViolation' }})
    aws_vpc_security_group_violation: Optional[awsvpcsecuritygroupviolation.AwsVpcSecurityGroupViolation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsVPCSecurityGroupViolation' }})
    dns_duplicate_rule_group_violation: Optional[dnsduplicaterulegroupviolation.DNSDuplicateRuleGroupViolation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsDuplicateRuleGroupViolation' }})
    dns_rule_group_limit_exceeded_violation: Optional[dnsrulegrouplimitexceededviolation.DNSRuleGroupLimitExceededViolation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsRuleGroupLimitExceededViolation' }})
    dns_rule_group_priority_conflict_violation: Optional[dnsrulegrouppriorityconflictviolation.DNSRuleGroupPriorityConflictViolation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsRuleGroupPriorityConflictViolation' }})
    network_firewall_black_hole_route_detected_violation: Optional[networkfirewallblackholeroutedetectedviolation.NetworkFirewallBlackHoleRouteDetectedViolation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkFirewallBlackHoleRouteDetectedViolation' }})
    network_firewall_internet_traffic_not_inspected_violation: Optional[networkfirewallinternettrafficnotinspectedviolation.NetworkFirewallInternetTrafficNotInspectedViolation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkFirewallInternetTrafficNotInspectedViolation' }})
    network_firewall_invalid_route_configuration_violation: Optional[networkfirewallinvalidrouteconfigurationviolation.NetworkFirewallInvalidRouteConfigurationViolation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkFirewallInvalidRouteConfigurationViolation' }})
    network_firewall_missing_expected_rt_violation: Optional[networkfirewallmissingexpectedrtviolation.NetworkFirewallMissingExpectedRtViolation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkFirewallMissingExpectedRTViolation' }})
    network_firewall_missing_expected_routes_violation: Optional[networkfirewallmissingexpectedroutesviolation.NetworkFirewallMissingExpectedRoutesViolation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkFirewallMissingExpectedRoutesViolation' }})
    network_firewall_missing_firewall_violation: Optional[networkfirewallmissingfirewallviolation.NetworkFirewallMissingFirewallViolation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkFirewallMissingFirewallViolation' }})
    network_firewall_missing_subnet_violation: Optional[networkfirewallmissingsubnetviolation.NetworkFirewallMissingSubnetViolation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkFirewallMissingSubnetViolation' }})
    network_firewall_policy_modified_violation: Optional[networkfirewallpolicymodifiedviolation.NetworkFirewallPolicyModifiedViolation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkFirewallPolicyModifiedViolation' }})
    network_firewall_unexpected_firewall_routes_violation: Optional[networkfirewallunexpectedfirewallroutesviolation.NetworkFirewallUnexpectedFirewallRoutesViolation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkFirewallUnexpectedFirewallRoutesViolation' }})
    network_firewall_unexpected_gateway_routes_violation: Optional[networkfirewallunexpectedgatewayroutesviolation.NetworkFirewallUnexpectedGatewayRoutesViolation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkFirewallUnexpectedGatewayRoutesViolation' }})
    possible_remediation_actions: Optional[possibleremediationactions.PossibleRemediationActions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PossibleRemediationActions' }})
    
