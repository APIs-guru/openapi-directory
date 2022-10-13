package shared

type CreateLocationS3Request struct {
	AgentArns      []string            `json:"AgentArns"`
	S3BucketArn    string              `json:"S3BucketArn"`
	S3Config       S3Config            `json:"S3Config"`
	S3StorageClass *S3StorageClassEnum `json:"S3StorageClass"`
	Subdirectory   *string             `json:"Subdirectory"`
	Tags           []TagListEntry      `json:"Tags"`
}
