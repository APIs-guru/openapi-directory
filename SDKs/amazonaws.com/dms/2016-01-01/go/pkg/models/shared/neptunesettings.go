package shared

type NeptuneSettings struct {
	ErrorRetryDuration   *int64  `json:"ErrorRetryDuration"`
	IamAuthEnabled       *bool   `json:"IamAuthEnabled"`
	MaxFileSize          *int64  `json:"MaxFileSize"`
	MaxRetryCount        *int64  `json:"MaxRetryCount"`
	S3BucketFolder       string  `json:"S3BucketFolder"`
	S3BucketName         string  `json:"S3BucketName"`
	ServiceAccessRoleArn *string `json:"ServiceAccessRoleArn"`
}
