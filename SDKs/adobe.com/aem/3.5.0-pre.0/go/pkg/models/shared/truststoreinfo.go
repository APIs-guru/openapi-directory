package shared



type TruststoreInfo struct {
    Aliases []TruststoreItems `json:"aliases,omitempty"`
    Exists *bool `json:"exists,omitempty"`
    
}

