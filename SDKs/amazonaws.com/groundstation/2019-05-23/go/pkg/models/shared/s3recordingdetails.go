package shared

type S3RecordingDetails struct {
	BucketArn   *string `json:"bucketArn"`
	KeyTemplate *string `json:"keyTemplate"`
}
