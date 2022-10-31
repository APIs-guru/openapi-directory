package shared



type StepFunctionsAction struct {
    ExecutionNamePrefix *string `json:"executionNamePrefix,omitempty"`
    RoleArn string `json:"roleArn"`
    StateMachineName string `json:"stateMachineName"`
    
}

