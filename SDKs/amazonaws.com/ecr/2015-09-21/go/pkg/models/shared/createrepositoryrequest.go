package shared

type CreateRepositoryRequest struct {
	EncryptionConfiguration    *EncryptionConfiguration    `json:"encryptionConfiguration"`
	ImageScanningConfiguration *ImageScanningConfiguration `json:"imageScanningConfiguration"`
	ImageTagMutability         *ImageTagMutabilityEnum     `json:"imageTagMutability"`
	RepositoryName             string                      `json:"repositoryName"`
	Tags                       []Tag                       `json:"tags"`
}
