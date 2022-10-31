package shared

import (
	"time"
)

type ListWebhookItem struct {
	Arn           *string           `json:"arn,omitempty"`
	Definition    WebhookDefinition `json:"definition"`
	ErrorCode     *string           `json:"errorCode,omitempty"`
	ErrorMessage  *string           `json:"errorMessage,omitempty"`
	LastTriggered *time.Time        `json:"lastTriggered,omitempty"`
	Tags          []Tag             `json:"tags,omitempty"`
	URL           string            `json:"url"`
}
