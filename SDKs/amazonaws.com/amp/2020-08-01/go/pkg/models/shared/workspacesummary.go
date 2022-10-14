package shared

import (
	"time"
)

type WorkspaceSummary struct {
	Alias       *string           `json:"alias,omitempty"`
	Arn         string            `json:"arn"`
	CreatedAt   time.Time         `json:"createdAt"`
	Status      WorkspaceStatus   `json:"status"`
	Tags        map[string]string `json:"tags,omitempty"`
	WorkspaceID string            `json:"workspaceId"`
}
