package shared



type BatchDeleteTableResponse struct {
    Errors []TableError `json:"Errors,omitempty"`
    
}

