package shared



type Function struct {
    FunctionArn *string `json:"FunctionArn,omitempty"`
    FunctionConfiguration *FunctionConfiguration `json:"FunctionConfiguration,omitempty"`
    ID string `json:"Id"`
    
}

