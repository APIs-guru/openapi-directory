package shared

// KinesisAction
// Describes an action to write data to an Amazon Kinesis stream.
type KinesisAction struct {
	PartitionKey *string `json:"partitionKey,omitempty"`
	RoleArn      string  `json:"roleArn"`
	StreamName   string  `json:"streamName"`
}
