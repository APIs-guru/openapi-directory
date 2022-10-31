package shared



type BatchWriteResponse struct {
    Responses []BatchWriteOperationResponse `json:"Responses,omitempty"`
    
}

