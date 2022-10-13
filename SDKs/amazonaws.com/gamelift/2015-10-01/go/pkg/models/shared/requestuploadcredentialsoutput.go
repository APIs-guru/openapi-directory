package shared

type RequestUploadCredentialsOutput struct {
	StorageLocation   *S3Location     `json:"StorageLocation"`
	UploadCredentials *AwsCredentials `json:"UploadCredentials"`
}
