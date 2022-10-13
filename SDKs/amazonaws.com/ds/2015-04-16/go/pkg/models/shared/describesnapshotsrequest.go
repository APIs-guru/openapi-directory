package shared

type DescribeSnapshotsRequest struct {
	DirectoryID *string  `json:"DirectoryId"`
	Limit       *int64   `json:"Limit"`
	NextToken   *string  `json:"NextToken"`
	SnapshotIds []string `json:"SnapshotIds"`
}
