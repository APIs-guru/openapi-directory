package shared

import (
	"time"
)

type Repository struct {
	CreatedAt                  *time.Time                  `json:"createdAt"`
	EncryptionConfiguration    *EncryptionConfiguration    `json:"encryptionConfiguration"`
	ImageScanningConfiguration *ImageScanningConfiguration `json:"imageScanningConfiguration"`
	ImageTagMutability         *ImageTagMutabilityEnum     `json:"imageTagMutability"`
	RegistryID                 *string                     `json:"registryId"`
	RepositoryArn              *string                     `json:"repositoryArn"`
	RepositoryName             *string                     `json:"repositoryName"`
	RepositoryURI              *string                     `json:"repositoryUri"`
}
