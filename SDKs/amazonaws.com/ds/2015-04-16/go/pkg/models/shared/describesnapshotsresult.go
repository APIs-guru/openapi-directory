package shared

// DescribeSnapshotsResult
// Contains the results of the <a>DescribeSnapshots</a> operation.
type DescribeSnapshotsResult struct {
	NextToken *string    `json:"NextToken,omitempty"`
	Snapshots []Snapshot `json:"Snapshots,omitempty"`
}
