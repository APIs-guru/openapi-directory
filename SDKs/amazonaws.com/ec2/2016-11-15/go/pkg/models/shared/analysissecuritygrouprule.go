package shared

// AnalysisSecurityGroupRule
// Describes a security group rule.
type AnalysisSecurityGroupRule struct {
	Cidr            *string
	Direction       *string
	PortRange       *PortRange
	PrefixListID    *string
	Protocol        *string
	SecurityGroupID *string
}
