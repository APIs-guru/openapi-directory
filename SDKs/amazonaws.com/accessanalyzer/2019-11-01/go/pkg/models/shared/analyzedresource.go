package shared

import (
	"time"
)

type AnalyzedResource struct {
	Actions              []string           `json:"actions"`
	AnalyzedAt           time.Time          `json:"analyzedAt"`
	CreatedAt            time.Time          `json:"createdAt"`
	Error                *string            `json:"error"`
	IsPublic             bool               `json:"isPublic"`
	ResourceArn          string             `json:"resourceArn"`
	ResourceOwnerAccount string             `json:"resourceOwnerAccount"`
	ResourceType         ResourceTypeEnum   `json:"resourceType"`
	SharedVia            []string           `json:"sharedVia"`
	Status               *FindingStatusEnum `json:"status"`
	UpdatedAt            time.Time          `json:"updatedAt"`
}
