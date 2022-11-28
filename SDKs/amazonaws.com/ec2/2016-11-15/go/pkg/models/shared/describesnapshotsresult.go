package shared

type DescribeSnapshotsResult struct {
	NextToken *string
	Snapshots []Snapshot
}
