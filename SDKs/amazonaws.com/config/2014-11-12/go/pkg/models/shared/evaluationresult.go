package shared

import (
	"time"
)

type EvaluationResult struct {
	Annotation                 *string                     `json:"Annotation,omitempty"`
	ComplianceType             *ComplianceTypeEnum         `json:"ComplianceType,omitempty"`
	ConfigRuleInvokedTime      *time.Time                  `json:"ConfigRuleInvokedTime,omitempty"`
	EvaluationResultIdentifier *EvaluationResultIdentifier `json:"EvaluationResultIdentifier,omitempty"`
	ResultRecordedTime         *time.Time                  `json:"ResultRecordedTime,omitempty"`
	ResultToken                *string                     `json:"ResultToken,omitempty"`
}
