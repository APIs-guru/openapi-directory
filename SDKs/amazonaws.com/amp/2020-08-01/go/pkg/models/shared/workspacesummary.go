package shared

import (
	"time"
)

type WorkspaceSummary struct {
	Alias       *string           `json:"alias"`
	Arn         string            `json:"arn"`
	CreatedAt   time.Time         `json:"createdAt"`
	Status      WorkspaceStatus   `json:"status"`
	Tags        map[string]string `json:"tags"`
	WorkspaceID string            `json:"workspaceId"`
}
