package shared



type ResourceViolation struct {
    AwsEc2InstanceViolation *AwsEc2InstanceViolation `json:"AwsEc2InstanceViolation,omitempty"`
    AwsEc2NetworkInterfaceViolation *AwsEc2NetworkInterfaceViolation `json:"AwsEc2NetworkInterfaceViolation,omitempty"`
    AwsVpcSecurityGroupViolation *AwsVpcSecurityGroupViolation `json:"AwsVPCSecurityGroupViolation,omitempty"`
    DNSDuplicateRuleGroupViolation *DNSDuplicateRuleGroupViolation `json:"DnsDuplicateRuleGroupViolation,omitempty"`
    DNSRuleGroupLimitExceededViolation *DNSRuleGroupLimitExceededViolation `json:"DnsRuleGroupLimitExceededViolation,omitempty"`
    DNSRuleGroupPriorityConflictViolation *DNSRuleGroupPriorityConflictViolation `json:"DnsRuleGroupPriorityConflictViolation,omitempty"`
    NetworkFirewallBlackHoleRouteDetectedViolation *NetworkFirewallBlackHoleRouteDetectedViolation `json:"NetworkFirewallBlackHoleRouteDetectedViolation,omitempty"`
    NetworkFirewallInternetTrafficNotInspectedViolation *NetworkFirewallInternetTrafficNotInspectedViolation `json:"NetworkFirewallInternetTrafficNotInspectedViolation,omitempty"`
    NetworkFirewallInvalidRouteConfigurationViolation *NetworkFirewallInvalidRouteConfigurationViolation `json:"NetworkFirewallInvalidRouteConfigurationViolation,omitempty"`
    NetworkFirewallMissingExpectedRtViolation *NetworkFirewallMissingExpectedRtViolation `json:"NetworkFirewallMissingExpectedRTViolation,omitempty"`
    NetworkFirewallMissingExpectedRoutesViolation *NetworkFirewallMissingExpectedRoutesViolation `json:"NetworkFirewallMissingExpectedRoutesViolation,omitempty"`
    NetworkFirewallMissingFirewallViolation *NetworkFirewallMissingFirewallViolation `json:"NetworkFirewallMissingFirewallViolation,omitempty"`
    NetworkFirewallMissingSubnetViolation *NetworkFirewallMissingSubnetViolation `json:"NetworkFirewallMissingSubnetViolation,omitempty"`
    NetworkFirewallPolicyModifiedViolation *NetworkFirewallPolicyModifiedViolation `json:"NetworkFirewallPolicyModifiedViolation,omitempty"`
    NetworkFirewallUnexpectedFirewallRoutesViolation *NetworkFirewallUnexpectedFirewallRoutesViolation `json:"NetworkFirewallUnexpectedFirewallRoutesViolation,omitempty"`
    NetworkFirewallUnexpectedGatewayRoutesViolation *NetworkFirewallUnexpectedGatewayRoutesViolation `json:"NetworkFirewallUnexpectedGatewayRoutesViolation,omitempty"`
    PossibleRemediationActions *PossibleRemediationActions `json:"PossibleRemediationActions,omitempty"`
    
}

