package shared

type DescribeDirectoriesRequest struct {
	DirectoryIds []string `json:"DirectoryIds"`
	Limit        *int64   `json:"Limit"`
	NextToken    *string  `json:"NextToken"`
}
