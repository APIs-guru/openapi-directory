package shared



type OperationUpdate struct {
    Name string `json:"name"`
    OperationID string `json:"operationId"`
    OperatorConfiguration OperatorConfiguration `json:"operatorConfiguration"`
    
}

