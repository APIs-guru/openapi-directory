package shared

type DescribeBackupsResponse struct {
	Backups   []Backup `json:"Backups"`
	NextToken *string  `json:"NextToken"`
}
