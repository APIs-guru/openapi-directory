package shared

// KinesisStreamSourceConfiguration
// The stream and role Amazon Resource Names (ARNs) for a Kinesis data stream used as the source for a delivery stream.
type KinesisStreamSourceConfiguration struct {
	KinesisStreamArn string `json:"KinesisStreamARN"`
	RoleArn          string `json:"RoleARN"`
}
