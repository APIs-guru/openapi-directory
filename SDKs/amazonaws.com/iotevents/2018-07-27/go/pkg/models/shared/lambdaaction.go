package shared



type LambdaAction struct {
    FunctionArn string `json:"functionArn"`
    Payload *Payload `json:"payload,omitempty"`
    
}

