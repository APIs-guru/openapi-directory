package shared

type S3RecordingConfig struct {
	BucketArn string  `json:"bucketArn"`
	Prefix    *string `json:"prefix"`
	RoleArn   string  `json:"roleArn"`
}
