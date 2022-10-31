package shared



type PauseServiceResponse struct {
    OperationID *string `json:"OperationId,omitempty"`
    Service Service `json:"Service"`
    
}

