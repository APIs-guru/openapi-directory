package shared

// ReservedCacheNodeMessage
// Represents the output of a <code>DescribeReservedCacheNodes</code> operation.
type ReservedCacheNodeMessage struct {
	Marker             *string
	ReservedCacheNodes []ReservedCacheNode
}
