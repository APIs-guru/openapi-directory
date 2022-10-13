package shared

type KinesisAction struct {
	PartitionKey *string `json:"partitionKey"`
	RoleArn      string  `json:"roleArn"`
	StreamName   string  `json:"streamName"`
}
