package shared

type GetWorkingLocationResponse struct {
	S3Bucket *string `json:"s3Bucket"`
	S3Path   *string `json:"s3Path"`
	S3URI    *string `json:"s3Uri"`
}
