package shared

import (
	"time"
)

type TopicRuleListItem struct {
	CreatedAt    *time.Time `json:"createdAt"`
	RuleArn      *string    `json:"ruleArn"`
	RuleDisabled *bool      `json:"ruleDisabled"`
	RuleName     *string    `json:"ruleName"`
	TopicPattern *string    `json:"topicPattern"`
}
