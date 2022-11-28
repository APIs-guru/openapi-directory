package shared

// CacheClusterMessage
// Represents the output of a <code>DescribeCacheClusters</code> operation.
type CacheClusterMessage struct {
	CacheClusters []CacheCluster
	Marker        *string
}
