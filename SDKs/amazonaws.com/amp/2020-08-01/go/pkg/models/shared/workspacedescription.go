package shared

import (
	"time"
)

type WorkspaceDescription struct {
	Alias              *string           `json:"alias"`
	Arn                string            `json:"arn"`
	CreatedAt          time.Time         `json:"createdAt"`
	PrometheusEndpoint *string           `json:"prometheusEndpoint"`
	Status             WorkspaceStatus   `json:"status"`
	Tags               map[string]string `json:"tags"`
	WorkspaceID        string            `json:"workspaceId"`
}
