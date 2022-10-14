package shared

type ExecutorConfiguration struct {
	JobWorkerExecutorConfiguration *JobWorkerExecutorConfiguration `json:"jobWorkerExecutorConfiguration,omitempty"`
	LambdaExecutorConfiguration    *LambdaExecutorConfiguration    `json:"lambdaExecutorConfiguration,omitempty"`
}
