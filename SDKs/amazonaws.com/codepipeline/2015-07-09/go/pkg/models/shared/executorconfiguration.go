package shared

type ExecutorConfiguration struct {
	JobWorkerExecutorConfiguration *JobWorkerExecutorConfiguration `json:"jobWorkerExecutorConfiguration"`
	LambdaExecutorConfiguration    *LambdaExecutorConfiguration    `json:"lambdaExecutorConfiguration"`
}
