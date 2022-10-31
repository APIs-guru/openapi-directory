package shared

import (
	"time"
)

type AggregateEvaluationResult struct {
	AccountID                  *string                     `json:"AccountId,omitempty"`
	Annotation                 *string                     `json:"Annotation,omitempty"`
	AwsRegion                  *string                     `json:"AwsRegion,omitempty"`
	ComplianceType             *ComplianceTypeEnum         `json:"ComplianceType,omitempty"`
	ConfigRuleInvokedTime      *time.Time                  `json:"ConfigRuleInvokedTime,omitempty"`
	EvaluationResultIdentifier *EvaluationResultIdentifier `json:"EvaluationResultIdentifier,omitempty"`
	ResultRecordedTime         *time.Time                  `json:"ResultRecordedTime,omitempty"`
}
