package shared

// DescribeBackupsResponse
// Response object for <code>DescribeBackups</code> operation.
type DescribeBackupsResponse struct {
	Backups   []Backup `json:"Backups,omitempty"`
	NextToken *string  `json:"NextToken,omitempty"`
}
