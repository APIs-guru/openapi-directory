package shared

import (
	"time"
)

type Webhook struct {
	BranchFilter       *string               `json:"branchFilter"`
	BuildType          *WebhookBuildTypeEnum `json:"buildType"`
	FilterGroups       [][]WebhookFilter     `json:"filterGroups"`
	LastModifiedSecret *time.Time            `json:"lastModifiedSecret"`
	PayloadURL         *string               `json:"payloadUrl"`
	Secret             *string               `json:"secret"`
	URL                *string               `json:"url"`
}
