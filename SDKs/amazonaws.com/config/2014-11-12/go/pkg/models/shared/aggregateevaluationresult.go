package shared

import (
	"time"
)

type AggregateEvaluationResult struct {
	AccountID                  *string                     `json:"AccountId"`
	Annotation                 *string                     `json:"Annotation"`
	AwsRegion                  *string                     `json:"AwsRegion"`
	ComplianceType             *ComplianceTypeEnum         `json:"ComplianceType"`
	ConfigRuleInvokedTime      *time.Time                  `json:"ConfigRuleInvokedTime"`
	EvaluationResultIdentifier *EvaluationResultIdentifier `json:"EvaluationResultIdentifier"`
	ResultRecordedTime         *time.Time                  `json:"ResultRecordedTime"`
}
