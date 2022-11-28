package shared

// SecurityGroupRule
// Describes a security group rule.
type SecurityGroupRule struct {
	CidrIpv4            *string
	CidrIpv6            *string
	Description         *string
	FromPort            *int64
	GroupID             *string
	GroupOwnerID        *string
	IPProtocol          *string
	IsEgress            *bool
	PrefixListID        *string
	ReferencedGroupInfo *ReferencedSecurityGroup
	SecurityGroupRuleID *string
	Tags                []Tag
	ToPort              *int64
}
