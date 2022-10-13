package shared

type DescribeFileSystemsResponse struct {
	FileSystems []FileSystem `json:"FileSystems"`
	NextToken   *string      `json:"NextToken"`
}
