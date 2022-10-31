package shared



type DescribeDirectoryConfigsResult struct {
    DirectoryConfigs []DirectoryConfig `json:"DirectoryConfigs,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

