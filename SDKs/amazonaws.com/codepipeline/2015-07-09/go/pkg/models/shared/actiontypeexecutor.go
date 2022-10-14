package shared

type ActionTypeExecutor struct {
	Configuration            ExecutorConfiguration `json:"configuration"`
	JobTimeout               *int64                `json:"jobTimeout,omitempty"`
	PolicyStatementsTemplate *string               `json:"policyStatementsTemplate,omitempty"`
	Type                     ExecutorTypeEnum      `json:"type"`
}
