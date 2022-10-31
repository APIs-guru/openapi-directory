package shared



type BatchDeletePartitionResponse struct {
    Errors []PartitionError `json:"Errors,omitempty"`
    
}

