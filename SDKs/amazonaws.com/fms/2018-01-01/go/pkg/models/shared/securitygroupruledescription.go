package shared

// SecurityGroupRuleDescription
// Describes a set of permissions for a security group rule.
type SecurityGroupRuleDescription struct {
	FromPort     *int64  `json:"FromPort,omitempty"`
	Ipv4Range    *string `json:"IPV4Range,omitempty"`
	Ipv6Range    *string `json:"IPV6Range,omitempty"`
	PrefixListID *string `json:"PrefixListId,omitempty"`
	Protocol     *string `json:"Protocol,omitempty"`
	ToPort       *int64  `json:"ToPort,omitempty"`
}
