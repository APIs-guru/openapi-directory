package shared

// DescribeFileSystemsRequest
// The request object for <code>DescribeFileSystems</code> operation.
type DescribeFileSystemsRequest struct {
	FileSystemIds []string `json:"FileSystemIds,omitempty"`
	MaxResults    *int64   `json:"MaxResults,omitempty"`
	NextToken     *string  `json:"NextToken,omitempty"`
}
