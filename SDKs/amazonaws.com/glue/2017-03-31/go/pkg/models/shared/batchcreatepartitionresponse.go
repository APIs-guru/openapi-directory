package shared



type BatchCreatePartitionResponse struct {
    Errors []PartitionError `json:"Errors,omitempty"`
    
}

