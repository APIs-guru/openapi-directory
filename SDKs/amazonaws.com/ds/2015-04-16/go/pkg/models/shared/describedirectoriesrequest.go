package shared

// DescribeDirectoriesRequest
// Contains the inputs for the <a>DescribeDirectories</a> operation.
type DescribeDirectoriesRequest struct {
	DirectoryIds []string `json:"DirectoryIds,omitempty"`
	Limit        *int64   `json:"Limit,omitempty"`
	NextToken    *string  `json:"NextToken,omitempty"`
}
