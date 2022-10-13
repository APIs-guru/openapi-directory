package shared

import (
	"time"
)

type RepositoryMetadata struct {
	Arn                   *string    `json:"Arn"`
	AccountID             *string    `json:"accountId"`
	CloneURLHTTP          *string    `json:"cloneUrlHttp"`
	CloneURLSSH           *string    `json:"cloneUrlSsh"`
	CreationDate          *time.Time `json:"creationDate"`
	DefaultBranch         *string    `json:"defaultBranch"`
	LastModifiedDate      *time.Time `json:"lastModifiedDate"`
	RepositoryDescription *string    `json:"repositoryDescription"`
	RepositoryID          *string    `json:"repositoryId"`
	RepositoryName        *string    `json:"repositoryName"`
}
