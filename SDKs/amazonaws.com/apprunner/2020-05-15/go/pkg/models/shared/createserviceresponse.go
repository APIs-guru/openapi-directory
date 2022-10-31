package shared



type CreateServiceResponse struct {
    OperationID string `json:"OperationId"`
    Service Service `json:"Service"`
    
}

