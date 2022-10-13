package shared

import (
	"time"
)

type MatchmakingRuleSet struct {
	CreationTime *time.Time `json:"CreationTime"`
	RuleSetArn   *string    `json:"RuleSetArn"`
	RuleSetBody  string     `json:"RuleSetBody"`
	RuleSetName  *string    `json:"RuleSetName"`
}
