package shared

import (
	"time"
)

type ListWebhookItem struct {
	Arn           *string           `json:"arn"`
	Definition    WebhookDefinition `json:"definition"`
	ErrorCode     *string           `json:"errorCode"`
	ErrorMessage  *string           `json:"errorMessage"`
	LastTriggered *time.Time        `json:"lastTriggered"`
	Tags          []Tag             `json:"tags"`
	URL           string            `json:"url"`
}
