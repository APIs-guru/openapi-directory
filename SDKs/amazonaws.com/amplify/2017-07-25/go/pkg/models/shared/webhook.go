package shared

import (
	"time"
)

// Webhook
//
//	Describes a webhook that connects repository events to an Amplify app.
type Webhook struct {
	BranchName  string    `json:"branchName"`
	CreateTime  time.Time `json:"createTime"`
	Description string    `json:"description"`
	UpdateTime  time.Time `json:"updateTime"`
	WebhookArn  string    `json:"webhookArn"`
	WebhookID   string    `json:"webhookId"`
	WebhookURL  string    `json:"webhookUrl"`
}
