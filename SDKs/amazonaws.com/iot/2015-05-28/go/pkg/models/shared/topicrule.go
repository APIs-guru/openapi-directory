package shared

import (
	"time"
)

type TopicRule struct {
	Actions          []Action   `json:"actions"`
	AwsIotSQLVersion *string    `json:"awsIotSqlVersion"`
	CreatedAt        *time.Time `json:"createdAt"`
	Description      *string    `json:"description"`
	ErrorAction      *Action    `json:"errorAction"`
	RuleDisabled     *bool      `json:"ruleDisabled"`
	RuleName         *string    `json:"ruleName"`
	SQL              *string    `json:"sql"`
}
