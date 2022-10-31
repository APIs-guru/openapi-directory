package shared



type DeleteServiceResponse struct {
    OperationID string `json:"OperationId"`
    Service Service `json:"Service"`
    
}

