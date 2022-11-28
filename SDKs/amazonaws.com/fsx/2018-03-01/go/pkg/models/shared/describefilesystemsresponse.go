package shared

// DescribeFileSystemsResponse
// The response object for <code>DescribeFileSystems</code> operation.
type DescribeFileSystemsResponse struct {
	FileSystems []FileSystem `json:"FileSystems,omitempty"`
	NextToken   *string      `json:"NextToken,omitempty"`
}
