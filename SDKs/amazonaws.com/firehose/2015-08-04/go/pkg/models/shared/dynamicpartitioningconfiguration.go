package shared

type DynamicPartitioningConfiguration struct {
	Enabled      *bool         `json:"Enabled"`
	RetryOptions *RetryOptions `json:"RetryOptions"`
}
