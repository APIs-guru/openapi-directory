package shared

import (
	"time"
)

type Webhook struct {
	BranchFilter       *string               `json:"branchFilter,omitempty"`
	BuildType          *WebhookBuildTypeEnum `json:"buildType,omitempty"`
	FilterGroups       [][]WebhookFilter     `json:"filterGroups,omitempty"`
	LastModifiedSecret *time.Time            `json:"lastModifiedSecret,omitempty"`
	PayloadURL         *string               `json:"payloadUrl,omitempty"`
	Secret             *string               `json:"secret,omitempty"`
	URL                *string               `json:"url,omitempty"`
}
