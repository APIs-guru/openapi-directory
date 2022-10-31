package shared

type KinesisStreamSourceConfiguration struct {
	KinesisStreamArn string `json:"KinesisStreamARN"`
	RoleArn          string `json:"RoleARN"`
}
