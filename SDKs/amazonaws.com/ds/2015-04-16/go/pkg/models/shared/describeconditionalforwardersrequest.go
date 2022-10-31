package shared



type DescribeConditionalForwardersRequest struct {
    DirectoryID string `json:"DirectoryId"`
    RemoteDomainNames []string `json:"RemoteDomainNames,omitempty"`
    
}

