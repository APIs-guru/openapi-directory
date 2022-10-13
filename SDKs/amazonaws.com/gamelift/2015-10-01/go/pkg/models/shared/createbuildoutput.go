package shared

type CreateBuildOutput struct {
	Build             *Build          `json:"Build"`
	StorageLocation   *S3Location     `json:"StorageLocation"`
	UploadCredentials *AwsCredentials `json:"UploadCredentials"`
}
