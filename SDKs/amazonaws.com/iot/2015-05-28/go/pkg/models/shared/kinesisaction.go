package shared

type KinesisAction struct {
	PartitionKey *string `json:"partitionKey,omitempty"`
	RoleArn      string  `json:"roleArn"`
	StreamName   string  `json:"streamName"`
}
