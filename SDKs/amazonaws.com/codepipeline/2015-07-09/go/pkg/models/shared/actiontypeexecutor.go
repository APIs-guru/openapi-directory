package shared

// ActionTypeExecutor
// The action engine, or executor, for an action type created for a provider, where the action is to be used by customers of the provider. The action engine is associated with the model used to create and update the action, such as the Lambda integration model.
type ActionTypeExecutor struct {
	Configuration            ExecutorConfiguration `json:"configuration"`
	JobTimeout               *int64                `json:"jobTimeout,omitempty"`
	PolicyStatementsTemplate *string               `json:"policyStatementsTemplate,omitempty"`
	Type                     ExecutorTypeEnum      `json:"type"`
}
