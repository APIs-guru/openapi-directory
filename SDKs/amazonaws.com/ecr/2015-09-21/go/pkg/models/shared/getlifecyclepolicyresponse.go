package shared

import (
	"time"
)

type GetLifecyclePolicyResponse struct {
	LastEvaluatedAt     *time.Time `json:"lastEvaluatedAt,omitempty"`
	LifecyclePolicyText *string    `json:"lifecyclePolicyText,omitempty"`
	RegistryID          *string    `json:"registryId,omitempty"`
	RepositoryName      *string    `json:"repositoryName,omitempty"`
}
