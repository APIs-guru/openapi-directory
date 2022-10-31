package shared

import (
	"time"
)

type LifecyclePolicyPreviewResult struct {
	Action              *LifecyclePolicyRuleAction `json:"action,omitempty"`
	AppliedRulePriority *int64                     `json:"appliedRulePriority,omitempty"`
	ImageDigest         *string                    `json:"imageDigest,omitempty"`
	ImagePushedAt       *time.Time                 `json:"imagePushedAt,omitempty"`
	ImageTags           []string                   `json:"imageTags,omitempty"`
}
