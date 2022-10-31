package shared



type DescribeFileSystemsResponse struct {
    FileSystems []FileSystem `json:"FileSystems,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

