package shared

import (
	"time"
)

type ConfigRuleEvaluationStatus struct {
	ConfigRuleArn                *string    `json:"ConfigRuleArn"`
	ConfigRuleID                 *string    `json:"ConfigRuleId"`
	ConfigRuleName               *string    `json:"ConfigRuleName"`
	FirstActivatedTime           *time.Time `json:"FirstActivatedTime"`
	FirstEvaluationStarted       *bool      `json:"FirstEvaluationStarted"`
	LastDeactivatedTime          *time.Time `json:"LastDeactivatedTime"`
	LastErrorCode                *string    `json:"LastErrorCode"`
	LastErrorMessage             *string    `json:"LastErrorMessage"`
	LastFailedEvaluationTime     *time.Time `json:"LastFailedEvaluationTime"`
	LastFailedInvocationTime     *time.Time `json:"LastFailedInvocationTime"`
	LastSuccessfulEvaluationTime *time.Time `json:"LastSuccessfulEvaluationTime"`
	LastSuccessfulInvocationTime *time.Time `json:"LastSuccessfulInvocationTime"`
}
