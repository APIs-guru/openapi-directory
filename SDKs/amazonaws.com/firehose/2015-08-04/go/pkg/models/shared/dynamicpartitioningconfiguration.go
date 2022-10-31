package shared

type DynamicPartitioningConfiguration struct {
	Enabled      *bool         `json:"Enabled,omitempty"`
	RetryOptions *RetryOptions `json:"RetryOptions,omitempty"`
}
