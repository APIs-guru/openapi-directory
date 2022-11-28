package shared

// CacheSubnetGroupMessage
// Represents the output of a <code>DescribeCacheSubnetGroups</code> operation.
type CacheSubnetGroupMessage struct {
	CacheSubnetGroups []CacheSubnetGroup
	Marker            *string
}
