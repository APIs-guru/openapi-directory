package shared

// ReplicationGroupMessage
// Represents the output of a <code>DescribeReplicationGroups</code> operation.
type ReplicationGroupMessage struct {
	Marker            *string
	ReplicationGroups []ReplicationGroup
}
