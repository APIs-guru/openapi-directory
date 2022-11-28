package shared

// ExecutorConfiguration
// The action engine, or executor, related to the supported integration model used to create and update the action type. The available executor types are <code>Lambda</code> and <code>JobWorker</code>.
type ExecutorConfiguration struct {
	JobWorkerExecutorConfiguration *JobWorkerExecutorConfiguration `json:"jobWorkerExecutorConfiguration,omitempty"`
	LambdaExecutorConfiguration    *LambdaExecutorConfiguration    `json:"lambdaExecutorConfiguration,omitempty"`
}
