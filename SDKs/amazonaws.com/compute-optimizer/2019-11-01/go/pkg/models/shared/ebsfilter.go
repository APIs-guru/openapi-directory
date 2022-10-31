package shared



type EbsFilter struct {
    Name *EbsFilterNameEnum `json:"name,omitempty"`
    Values []string `json:"values,omitempty"`
    
}

