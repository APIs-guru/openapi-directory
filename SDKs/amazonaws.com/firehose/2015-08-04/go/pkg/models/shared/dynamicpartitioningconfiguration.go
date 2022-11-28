package shared

// DynamicPartitioningConfiguration
// The configuration of the dynamic partitioning mechanism that creates smaller data sets from the streaming data by partitioning it based on partition keys. Currently, dynamic partitioning is only supported for Amazon S3 destinations. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/dynamic-partitioning.html">https://docs.aws.amazon.com/firehose/latest/dev/dynamic-partitioning.html</a>
type DynamicPartitioningConfiguration struct {
	Enabled      *bool         `json:"Enabled,omitempty"`
	RetryOptions *RetryOptions `json:"RetryOptions,omitempty"`
}
