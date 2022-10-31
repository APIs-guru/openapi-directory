package shared



type Filter struct {
    Name *FilterNameEnum `json:"name,omitempty"`
    Values []string `json:"values,omitempty"`
    
}

