package shared

type DescribeDirectoriesResult struct {
	DirectoryDescriptions []DirectoryDescription `json:"DirectoryDescriptions"`
	NextToken             *string                `json:"NextToken"`
}
