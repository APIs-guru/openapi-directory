package shared



type DescribeDomainControllersResult struct {
    DomainControllers []DomainController `json:"DomainControllers,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

