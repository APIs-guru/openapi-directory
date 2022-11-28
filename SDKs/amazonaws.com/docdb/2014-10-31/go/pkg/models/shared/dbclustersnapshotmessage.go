package shared

// DbClusterSnapshotMessage
// Represents the output of <a>DescribeDBClusterSnapshots</a>.
type DbClusterSnapshotMessage struct {
	DbClusterSnapshots []DbClusterSnapshot
	Marker             *string
}
