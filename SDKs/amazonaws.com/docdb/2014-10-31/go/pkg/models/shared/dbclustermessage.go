package shared

// DbClusterMessage
// Represents the output of <a>DescribeDBClusters</a>.
type DbClusterMessage struct {
	DbClusters []DbCluster
	Marker     *string
}
