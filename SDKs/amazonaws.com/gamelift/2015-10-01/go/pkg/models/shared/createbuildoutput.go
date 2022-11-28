package shared

// CreateBuildOutput
// Represents the returned data in response to a request operation.
type CreateBuildOutput struct {
	Build             *Build          `json:"Build,omitempty"`
	StorageLocation   *S3Location     `json:"StorageLocation,omitempty"`
	UploadCredentials *AwsCredentials `json:"UploadCredentials,omitempty"`
}
