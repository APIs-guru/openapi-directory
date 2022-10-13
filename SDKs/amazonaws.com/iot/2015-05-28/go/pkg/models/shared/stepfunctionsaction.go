package shared

type StepFunctionsAction struct {
	ExecutionNamePrefix *string `json:"executionNamePrefix"`
	RoleArn             string  `json:"roleArn"`
	StateMachineName    string  `json:"stateMachineName"`
}
