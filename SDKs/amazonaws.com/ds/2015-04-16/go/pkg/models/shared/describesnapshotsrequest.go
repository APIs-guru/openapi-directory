package shared

// DescribeSnapshotsRequest
// Contains the inputs for the <a>DescribeSnapshots</a> operation.
type DescribeSnapshotsRequest struct {
	DirectoryID *string  `json:"DirectoryId,omitempty"`
	Limit       *int64   `json:"Limit,omitempty"`
	NextToken   *string  `json:"NextToken,omitempty"`
	SnapshotIds []string `json:"SnapshotIds,omitempty"`
}
