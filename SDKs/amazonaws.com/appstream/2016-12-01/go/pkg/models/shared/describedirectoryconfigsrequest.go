package shared

type DescribeDirectoryConfigsRequest struct {
	DirectoryNames []string `json:"DirectoryNames"`
	MaxResults     *int64   `json:"MaxResults"`
	NextToken      *string  `json:"NextToken"`
}
