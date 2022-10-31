package shared



type UpdateServiceResponse struct {
    OperationID string `json:"OperationId"`
    Service Service `json:"Service"`
    
}

