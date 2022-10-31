package shared



type RequestUploadCredentialsOutput struct {
    StorageLocation *S3Location `json:"StorageLocation,omitempty"`
    UploadCredentials *AwsCredentials `json:"UploadCredentials,omitempty"`
    
}

