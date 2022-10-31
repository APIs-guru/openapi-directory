package shared

import (
"time")

type TopicRule struct {
    Actions []Action `json:"actions,omitempty"`
    AwsIotSQLVersion *string `json:"awsIotSqlVersion,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    Description *string `json:"description,omitempty"`
    ErrorAction *Action `json:"errorAction,omitempty"`
    RuleDisabled *bool `json:"ruleDisabled,omitempty"`
    RuleName *string `json:"ruleName,omitempty"`
    SQL *string `json:"sql,omitempty"`
    
}

