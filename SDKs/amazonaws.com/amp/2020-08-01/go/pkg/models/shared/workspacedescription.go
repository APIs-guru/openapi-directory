package shared

import (
	"time"
)

// WorkspaceDescription
// Represents the properties of a workspace.
type WorkspaceDescription struct {
	Alias              *string           `json:"alias,omitempty"`
	Arn                string            `json:"arn"`
	CreatedAt          time.Time         `json:"createdAt"`
	PrometheusEndpoint *string           `json:"prometheusEndpoint,omitempty"`
	Status             WorkspaceStatus   `json:"status"`
	Tags               map[string]string `json:"tags,omitempty"`
	WorkspaceID        string            `json:"workspaceId"`
}
