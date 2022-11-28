package shared

// DescribeDirectoriesResult
// Contains the results of the <a>DescribeDirectories</a> operation.
type DescribeDirectoriesResult struct {
	DirectoryDescriptions []DirectoryDescription `json:"DirectoryDescriptions,omitempty"`
	NextToken             *string                `json:"NextToken,omitempty"`
}
