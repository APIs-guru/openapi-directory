package shared

// NetworkACLEntry
// Describes an entry in a network ACL.
type NetworkACLEntry struct {
	CidrBlock     *string
	Egress        *bool
	IcmpTypeCode  *IcmpTypeCode
	Ipv6CidrBlock *string
	PortRange     *PortRange
	Protocol      *string
	RuleAction    *RuleActionEnum
	RuleNumber    *int64
}
