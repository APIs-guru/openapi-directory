package shared

import (
	"time"
)

type Repository struct {
	CreatedAt      *time.Time `json:"createdAt"`
	RegistryID     *string    `json:"registryId"`
	RepositoryArn  *string    `json:"repositoryArn"`
	RepositoryName *string    `json:"repositoryName"`
	RepositoryURI  *string    `json:"repositoryUri"`
}
