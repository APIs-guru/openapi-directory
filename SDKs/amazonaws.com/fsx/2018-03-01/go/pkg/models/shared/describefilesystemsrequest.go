package shared

type DescribeFileSystemsRequest struct {
	FileSystemIds []string `json:"FileSystemIds"`
	MaxResults    *int64   `json:"MaxResults"`
	NextToken     *string  `json:"NextToken"`
}
