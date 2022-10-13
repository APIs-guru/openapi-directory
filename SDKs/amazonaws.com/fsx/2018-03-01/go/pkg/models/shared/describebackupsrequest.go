package shared

type DescribeBackupsRequest struct {
	BackupIds  []string `json:"BackupIds"`
	Filters    []Filter `json:"Filters"`
	MaxResults *int64   `json:"MaxResults"`
	NextToken  *string  `json:"NextToken"`
}
