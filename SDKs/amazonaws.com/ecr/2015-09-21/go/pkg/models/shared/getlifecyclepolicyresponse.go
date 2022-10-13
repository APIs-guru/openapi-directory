package shared

import (
	"time"
)

type GetLifecyclePolicyResponse struct {
	LastEvaluatedAt     *time.Time `json:"lastEvaluatedAt"`
	LifecyclePolicyText *string    `json:"lifecyclePolicyText"`
	RegistryID          *string    `json:"registryId"`
	RepositoryName      *string    `json:"repositoryName"`
}
