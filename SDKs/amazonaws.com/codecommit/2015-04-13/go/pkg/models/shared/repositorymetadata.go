package shared

import (
"time")

type RepositoryMetadata struct {
    Arn *string `json:"Arn,omitempty"`
    AccountID *string `json:"accountId,omitempty"`
    CloneURLHTTP *string `json:"cloneUrlHttp,omitempty"`
    CloneURLSSH *string `json:"cloneUrlSsh,omitempty"`
    CreationDate *time.Time `json:"creationDate,omitempty"`
    DefaultBranch *string `json:"defaultBranch,omitempty"`
    LastModifiedDate *time.Time `json:"lastModifiedDate,omitempty"`
    RepositoryDescription *string `json:"repositoryDescription,omitempty"`
    RepositoryID *string `json:"repositoryId,omitempty"`
    RepositoryName *string `json:"repositoryName,omitempty"`
    
}

