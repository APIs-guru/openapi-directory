package shared

type ResourceViolation struct {
	AwsEc2InstanceViolation                             *AwsEc2InstanceViolation                             `json:"AwsEc2InstanceViolation"`
	AwsEc2NetworkInterfaceViolation                     *AwsEc2NetworkInterfaceViolation                     `json:"AwsEc2NetworkInterfaceViolation"`
	AwsVpcSecurityGroupViolation                        *AwsVpcSecurityGroupViolation                        `json:"AwsVPCSecurityGroupViolation"`
	DNSDuplicateRuleGroupViolation                      *DNSDuplicateRuleGroupViolation                      `json:"DnsDuplicateRuleGroupViolation"`
	DNSRuleGroupLimitExceededViolation                  *DNSRuleGroupLimitExceededViolation                  `json:"DnsRuleGroupLimitExceededViolation"`
	DNSRuleGroupPriorityConflictViolation               *DNSRuleGroupPriorityConflictViolation               `json:"DnsRuleGroupPriorityConflictViolation"`
	NetworkFirewallBlackHoleRouteDetectedViolation      *NetworkFirewallBlackHoleRouteDetectedViolation      `json:"NetworkFirewallBlackHoleRouteDetectedViolation"`
	NetworkFirewallInternetTrafficNotInspectedViolation *NetworkFirewallInternetTrafficNotInspectedViolation `json:"NetworkFirewallInternetTrafficNotInspectedViolation"`
	NetworkFirewallInvalidRouteConfigurationViolation   *NetworkFirewallInvalidRouteConfigurationViolation   `json:"NetworkFirewallInvalidRouteConfigurationViolation"`
	NetworkFirewallMissingExpectedRtViolation           *NetworkFirewallMissingExpectedRtViolation           `json:"NetworkFirewallMissingExpectedRTViolation"`
	NetworkFirewallMissingExpectedRoutesViolation       *NetworkFirewallMissingExpectedRoutesViolation       `json:"NetworkFirewallMissingExpectedRoutesViolation"`
	NetworkFirewallMissingFirewallViolation             *NetworkFirewallMissingFirewallViolation             `json:"NetworkFirewallMissingFirewallViolation"`
	NetworkFirewallMissingSubnetViolation               *NetworkFirewallMissingSubnetViolation               `json:"NetworkFirewallMissingSubnetViolation"`
	NetworkFirewallPolicyModifiedViolation              *NetworkFirewallPolicyModifiedViolation              `json:"NetworkFirewallPolicyModifiedViolation"`
	NetworkFirewallUnexpectedFirewallRoutesViolation    *NetworkFirewallUnexpectedFirewallRoutesViolation    `json:"NetworkFirewallUnexpectedFirewallRoutesViolation"`
	NetworkFirewallUnexpectedGatewayRoutesViolation     *NetworkFirewallUnexpectedGatewayRoutesViolation     `json:"NetworkFirewallUnexpectedGatewayRoutesViolation"`
	PossibleRemediationActions                          *PossibleRemediationActions                          `json:"PossibleRemediationActions"`
}
