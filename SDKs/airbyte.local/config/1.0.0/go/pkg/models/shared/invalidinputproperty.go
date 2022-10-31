package shared



type InvalidInputProperty struct {
    InvalidValue *string `json:"invalidValue,omitempty"`
    Message *string `json:"message,omitempty"`
    PropertyPath string `json:"propertyPath"`
    
}

