package shared

import (
	"time"
)

type LifecyclePolicyPreviewResult struct {
	Action              *LifecyclePolicyRuleAction `json:"action"`
	AppliedRulePriority *int64                     `json:"appliedRulePriority"`
	ImageDigest         *string                    `json:"imageDigest"`
	ImagePushedAt       *time.Time                 `json:"imagePushedAt"`
	ImageTags           []string                   `json:"imageTags"`
}
