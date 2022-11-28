package shared

// DescribeSnapshotsListMessage
// Represents the output of a <code>DescribeSnapshots</code> operation.
type DescribeSnapshotsListMessage struct {
	Marker    *string
	Snapshots []Snapshot
}
