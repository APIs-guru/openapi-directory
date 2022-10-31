package shared



type DescribeSnapshotsResult struct {
    NextToken *string `json:"NextToken,omitempty"`
    Snapshots []Snapshot `json:"Snapshots,omitempty"`
    
}

