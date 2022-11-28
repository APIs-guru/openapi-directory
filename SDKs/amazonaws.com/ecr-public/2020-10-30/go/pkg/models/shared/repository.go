package shared

import (
	"time"
)

// Repository
// An object representing a repository.
type Repository struct {
	CreatedAt      *time.Time `json:"createdAt,omitempty"`
	RegistryID     *string    `json:"registryId,omitempty"`
	RepositoryArn  *string    `json:"repositoryArn,omitempty"`
	RepositoryName *string    `json:"repositoryName,omitempty"`
	RepositoryURI  *string    `json:"repositoryUri,omitempty"`
}
