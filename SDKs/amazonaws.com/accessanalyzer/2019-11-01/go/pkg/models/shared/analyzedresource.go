package shared

import (
	"time"
)

type AnalyzedResource struct {
	Actions              []string           `json:"actions,omitempty"`
	AnalyzedAt           time.Time          `json:"analyzedAt"`
	CreatedAt            time.Time          `json:"createdAt"`
	Error                *string            `json:"error,omitempty"`
	IsPublic             bool               `json:"isPublic"`
	ResourceArn          string             `json:"resourceArn"`
	ResourceOwnerAccount string             `json:"resourceOwnerAccount"`
	ResourceType         ResourceTypeEnum   `json:"resourceType"`
	SharedVia            []string           `json:"sharedVia,omitempty"`
	Status               *FindingStatusEnum `json:"status,omitempty"`
	UpdatedAt            time.Time          `json:"updatedAt"`
}
