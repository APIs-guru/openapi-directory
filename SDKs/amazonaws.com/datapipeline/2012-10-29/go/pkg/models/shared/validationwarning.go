package shared



type ValidationWarning struct {
    ID *string `json:"id,omitempty"`
    Warnings []string `json:"warnings,omitempty"`
    
}

