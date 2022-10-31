package shared

type ViolationReasonEnum string

const (
	ViolationReasonEnumWebACLMissingRuleGroup                  ViolationReasonEnum = "WEB_ACL_MISSING_RULE_GROUP"
	ViolationReasonEnumResourceMissingWebACL                   ViolationReasonEnum = "RESOURCE_MISSING_WEB_ACL"
	ViolationReasonEnumResourceIncorrectWebACL                 ViolationReasonEnum = "RESOURCE_INCORRECT_WEB_ACL"
	ViolationReasonEnumResourceMissingShieldProtection         ViolationReasonEnum = "RESOURCE_MISSING_SHIELD_PROTECTION"
	ViolationReasonEnumResourceMissingWebACLOrShieldProtection ViolationReasonEnum = "RESOURCE_MISSING_WEB_ACL_OR_SHIELD_PROTECTION"
	ViolationReasonEnumResourceMissingSecurityGroup            ViolationReasonEnum = "RESOURCE_MISSING_SECURITY_GROUP"
	ViolationReasonEnumResourceViolatesAuditSecurityGroup      ViolationReasonEnum = "RESOURCE_VIOLATES_AUDIT_SECURITY_GROUP"
	ViolationReasonEnumSecurityGroupUnused                     ViolationReasonEnum = "SECURITY_GROUP_UNUSED"
	ViolationReasonEnumSecurityGroupRedundant                  ViolationReasonEnum = "SECURITY_GROUP_REDUNDANT"
	ViolationReasonEnumFmsCreatedSecurityGroupEdited           ViolationReasonEnum = "FMS_CREATED_SECURITY_GROUP_EDITED"
	ViolationReasonEnumMissingFirewall                         ViolationReasonEnum = "MISSING_FIREWALL"
	ViolationReasonEnumMissingFirewallSubnetInAz               ViolationReasonEnum = "MISSING_FIREWALL_SUBNET_IN_AZ"
	ViolationReasonEnumMissingExpectedRouteTable               ViolationReasonEnum = "MISSING_EXPECTED_ROUTE_TABLE"
	ViolationReasonEnumNetworkFirewallPolicyModified           ViolationReasonEnum = "NETWORK_FIREWALL_POLICY_MODIFIED"
	ViolationReasonEnumInternetGatewayMissingExpectedRoute     ViolationReasonEnum = "INTERNET_GATEWAY_MISSING_EXPECTED_ROUTE"
	ViolationReasonEnumFirewallSubnetMissingExpectedRoute      ViolationReasonEnum = "FIREWALL_SUBNET_MISSING_EXPECTED_ROUTE"
	ViolationReasonEnumUnexpectedFirewallRoutes                ViolationReasonEnum = "UNEXPECTED_FIREWALL_ROUTES"
	ViolationReasonEnumUnexpectedTargetGatewayRoutes           ViolationReasonEnum = "UNEXPECTED_TARGET_GATEWAY_ROUTES"
	ViolationReasonEnumTrafficInspectionCrossesAzBoundary      ViolationReasonEnum = "TRAFFIC_INSPECTION_CROSSES_AZ_BOUNDARY"
	ViolationReasonEnumInvalidRouteConfiguration               ViolationReasonEnum = "INVALID_ROUTE_CONFIGURATION"
	ViolationReasonEnumMissingTargetGateway                    ViolationReasonEnum = "MISSING_TARGET_GATEWAY"
	ViolationReasonEnumInternetTrafficNotInspected             ViolationReasonEnum = "INTERNET_TRAFFIC_NOT_INSPECTED"
	ViolationReasonEnumBlackHoleRouteDetected                  ViolationReasonEnum = "BLACK_HOLE_ROUTE_DETECTED"
	ViolationReasonEnumBlackHoleRouteDetectedInFirewallSubnet  ViolationReasonEnum = "BLACK_HOLE_ROUTE_DETECTED_IN_FIREWALL_SUBNET"
	ViolationReasonEnumResourceMissingDNSFirewall              ViolationReasonEnum = "RESOURCE_MISSING_DNS_FIREWALL"
)
