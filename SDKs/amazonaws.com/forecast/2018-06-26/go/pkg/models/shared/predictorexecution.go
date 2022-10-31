package shared



type PredictorExecution struct {
    AlgorithmArn *string `json:"AlgorithmArn,omitempty"`
    TestWindows []TestWindowSummary `json:"TestWindows,omitempty"`
    
}

