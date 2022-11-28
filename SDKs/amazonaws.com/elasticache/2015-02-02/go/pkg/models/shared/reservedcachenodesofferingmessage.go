package shared

// ReservedCacheNodesOfferingMessage
// Represents the output of a <code>DescribeReservedCacheNodesOfferings</code> operation.
type ReservedCacheNodesOfferingMessage struct {
	Marker                      *string
	ReservedCacheNodesOfferings []ReservedCacheNodesOffering
}
