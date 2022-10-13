package shared

type DescribeDirectoryConfigsResult struct {
	DirectoryConfigs []DirectoryConfig `json:"DirectoryConfigs"`
	NextToken        *string           `json:"NextToken"`
}
