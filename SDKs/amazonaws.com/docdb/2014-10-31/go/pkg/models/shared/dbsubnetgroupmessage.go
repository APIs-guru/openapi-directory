package shared

// DbSubnetGroupMessage
// Represents the output of <a>DescribeDBSubnetGroups</a>.
type DbSubnetGroupMessage struct {
	DbSubnetGroups []DbSubnetGroup
	Marker         *string
}
