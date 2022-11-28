package shared

import (
	"time"
)

// AggregateEvaluationResult
// The details of an Config evaluation for an account ID and region in an aggregator. Provides the Amazon Web Services resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information.
type AggregateEvaluationResult struct {
	AccountID                  *string                     `json:"AccountId,omitempty"`
	Annotation                 *string                     `json:"Annotation,omitempty"`
	AwsRegion                  *string                     `json:"AwsRegion,omitempty"`
	ComplianceType             *ComplianceTypeEnum         `json:"ComplianceType,omitempty"`
	ConfigRuleInvokedTime      *time.Time                  `json:"ConfigRuleInvokedTime,omitempty"`
	EvaluationResultIdentifier *EvaluationResultIdentifier `json:"EvaluationResultIdentifier,omitempty"`
	ResultRecordedTime         *time.Time                  `json:"ResultRecordedTime,omitempty"`
}
