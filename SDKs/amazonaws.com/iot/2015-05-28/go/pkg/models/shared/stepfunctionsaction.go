package shared

// StepFunctionsAction
// Starts execution of a Step Functions state machine.
type StepFunctionsAction struct {
	ExecutionNamePrefix *string `json:"executionNamePrefix,omitempty"`
	RoleArn             string  `json:"roleArn"`
	StateMachineName    string  `json:"stateMachineName"`
}
