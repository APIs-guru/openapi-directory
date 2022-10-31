package shared

type DescribeDirectoriesResult struct {
	DirectoryDescriptions []DirectoryDescription `json:"DirectoryDescriptions,omitempty"`
	NextToken             *string                `json:"NextToken,omitempty"`
}
