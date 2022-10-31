package shared



type Filter struct {
    Name *FilterNameEnum `json:"Name,omitempty"`
    Values []string `json:"Values,omitempty"`
    
}

