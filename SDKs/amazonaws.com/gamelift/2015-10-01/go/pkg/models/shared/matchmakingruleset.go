package shared

import (
	"time"
)

type MatchmakingRuleSet struct {
	CreationTime *time.Time `json:"CreationTime,omitempty"`
	RuleSetArn   *string    `json:"RuleSetArn,omitempty"`
	RuleSetBody  string     `json:"RuleSetBody"`
	RuleSetName  *string    `json:"RuleSetName,omitempty"`
}
