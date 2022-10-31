package shared



type GetDomainNamesResponse struct {
    Items []DomainName `json:"Items,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

