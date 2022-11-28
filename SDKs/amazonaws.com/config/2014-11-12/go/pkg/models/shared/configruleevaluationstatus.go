package shared

import (
	"time"
)

// ConfigRuleEvaluationStatus
// <p>Status information for your Config managed rules. The status includes information such as the last time the rule ran, the last time it failed, and the related error for the last failure.</p> <p>This action does not return status information about custom Config rules.</p>
type ConfigRuleEvaluationStatus struct {
	ConfigRuleArn                *string    `json:"ConfigRuleArn,omitempty"`
	ConfigRuleID                 *string    `json:"ConfigRuleId,omitempty"`
	ConfigRuleName               *string    `json:"ConfigRuleName,omitempty"`
	FirstActivatedTime           *time.Time `json:"FirstActivatedTime,omitempty"`
	FirstEvaluationStarted       *bool      `json:"FirstEvaluationStarted,omitempty"`
	LastDeactivatedTime          *time.Time `json:"LastDeactivatedTime,omitempty"`
	LastErrorCode                *string    `json:"LastErrorCode,omitempty"`
	LastErrorMessage             *string    `json:"LastErrorMessage,omitempty"`
	LastFailedEvaluationTime     *time.Time `json:"LastFailedEvaluationTime,omitempty"`
	LastFailedInvocationTime     *time.Time `json:"LastFailedInvocationTime,omitempty"`
	LastSuccessfulEvaluationTime *time.Time `json:"LastSuccessfulEvaluationTime,omitempty"`
	LastSuccessfulInvocationTime *time.Time `json:"LastSuccessfulInvocationTime,omitempty"`
}
