package shared



type ListHostsOutput struct {
    Hosts []Host `json:"Hosts,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

