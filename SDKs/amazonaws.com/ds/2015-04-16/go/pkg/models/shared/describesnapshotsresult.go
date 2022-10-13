package shared

type DescribeSnapshotsResult struct {
	NextToken *string    `json:"NextToken"`
	Snapshots []Snapshot `json:"Snapshots"`
}
