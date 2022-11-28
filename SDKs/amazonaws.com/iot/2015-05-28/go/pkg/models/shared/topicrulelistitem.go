package shared

import (
	"time"
)

// TopicRuleListItem
// Describes a rule.
type TopicRuleListItem struct {
	CreatedAt    *time.Time `json:"createdAt,omitempty"`
	RuleArn      *string    `json:"ruleArn,omitempty"`
	RuleDisabled *bool      `json:"ruleDisabled,omitempty"`
	RuleName     *string    `json:"ruleName,omitempty"`
	TopicPattern *string    `json:"topicPattern,omitempty"`
}
