package shared



type ConnectionBodyParameter struct {
    IsValueSecret *bool `json:"IsValueSecret,omitempty"`
    Key *string `json:"Key,omitempty"`
    Value *string `json:"Value,omitempty"`
    
}

