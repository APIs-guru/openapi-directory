package shared

type ActionTypeExecutor struct {
	Configuration            ExecutorConfiguration `json:"configuration"`
	JobTimeout               *int64                `json:"jobTimeout"`
	PolicyStatementsTemplate *string               `json:"policyStatementsTemplate"`
	Type                     ExecutorTypeEnum      `json:"type"`
}
