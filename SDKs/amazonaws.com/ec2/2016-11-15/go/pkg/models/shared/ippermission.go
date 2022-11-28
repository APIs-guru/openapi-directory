package shared

// IPPermission
// Describes a set of permissions for a security group rule.
type IPPermission struct {
	FromPort         *int64
	IPProtocol       *string
	IPRanges         []IPRange
	Ipv6Ranges       []Ipv6Range
	PrefixListIds    []PrefixListID
	ToPort           *int64
	UserIDGroupPairs []UserIDGroupPair
}
