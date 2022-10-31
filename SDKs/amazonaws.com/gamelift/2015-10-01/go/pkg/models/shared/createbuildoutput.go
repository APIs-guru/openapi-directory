package shared



type CreateBuildOutput struct {
    Build *Build `json:"Build,omitempty"`
    StorageLocation *S3Location `json:"StorageLocation,omitempty"`
    UploadCredentials *AwsCredentials `json:"UploadCredentials,omitempty"`
    
}

