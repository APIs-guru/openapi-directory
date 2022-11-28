package shared

// StaleIPPermission
// Describes a stale rule in a security group.
type StaleIPPermission struct {
	FromPort         *int64
	IPProtocol       *string
	IPRanges         []string
	PrefixListIds    []string
	ToPort           *int64
	UserIDGroupPairs []UserIDGroupPair
}
