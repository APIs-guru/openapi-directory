package shared



type DescribeFileSystemAliasesRequest struct {
    ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
    FileSystemID string `json:"FileSystemId"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

