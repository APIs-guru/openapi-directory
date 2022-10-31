package shared



type ListDomainsResponse struct {
    Items []ListDomainItem `json:"Items,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

