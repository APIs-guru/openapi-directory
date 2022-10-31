package shared



type EvaluationResult struct {
    AlgorithmArn *string `json:"AlgorithmArn,omitempty"`
    TestWindows []WindowSummary `json:"TestWindows,omitempty"`
    
}

