package shared



type ValidationError struct {
    Errors []string `json:"errors,omitempty"`
    ID *string `json:"id,omitempty"`
    
}

