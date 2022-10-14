package shared

import (
	"time"
)

type DeleteLifecyclePolicyResponse struct {
	LastEvaluatedAt     *time.Time `json:"lastEvaluatedAt,omitempty"`
	LifecyclePolicyText *string    `json:"lifecyclePolicyText,omitempty"`
	RegistryID          *string    `json:"registryId,omitempty"`
	RepositoryName      *string    `json:"repositoryName,omitempty"`
}
