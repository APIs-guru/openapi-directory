package shared



type DescribeBackupsResponse struct {
    Backups []Backup `json:"Backups,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

