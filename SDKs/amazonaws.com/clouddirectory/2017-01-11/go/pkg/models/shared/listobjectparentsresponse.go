package shared



type ListObjectParentsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    ParentLinks []ObjectIdentifierAndLinkNameTuple `json:"ParentLinks,omitempty"`
    Parents map[string]string `json:"Parents,omitempty"`
    
}

