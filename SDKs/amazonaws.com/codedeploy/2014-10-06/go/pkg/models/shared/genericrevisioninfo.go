package shared

import (
	"time"
)

type GenericRevisionInfo struct {
	DeploymentGroups []string   `json:"deploymentGroups"`
	Description      *string    `json:"description"`
	FirstUsedTime    *time.Time `json:"firstUsedTime"`
	LastUsedTime     *time.Time `json:"lastUsedTime"`
	RegisterTime     *time.Time `json:"registerTime"`
}
