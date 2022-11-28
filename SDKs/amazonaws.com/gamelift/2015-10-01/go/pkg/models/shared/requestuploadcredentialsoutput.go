package shared

// RequestUploadCredentialsOutput
// Represents the returned data in response to a request operation.
type RequestUploadCredentialsOutput struct {
	StorageLocation   *S3Location     `json:"StorageLocation,omitempty"`
	UploadCredentials *AwsCredentials `json:"UploadCredentials,omitempty"`
}
