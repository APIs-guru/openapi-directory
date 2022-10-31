package shared



type CreateRepositoryRequest struct {
    EncryptionConfiguration *EncryptionConfiguration `json:"encryptionConfiguration,omitempty"`
    ImageScanningConfiguration *ImageScanningConfiguration `json:"imageScanningConfiguration,omitempty"`
    ImageTagMutability *ImageTagMutabilityEnum `json:"imageTagMutability,omitempty"`
    RepositoryName string `json:"repositoryName"`
    Tags []Tag `json:"tags,omitempty"`
    
}

