package shared

import (
	"time"
)

type EvaluationResult struct {
	Annotation                 *string                     `json:"Annotation"`
	ComplianceType             *ComplianceTypeEnum         `json:"ComplianceType"`
	ConfigRuleInvokedTime      *time.Time                  `json:"ConfigRuleInvokedTime"`
	EvaluationResultIdentifier *EvaluationResultIdentifier `json:"EvaluationResultIdentifier"`
	ResultRecordedTime         *time.Time                  `json:"ResultRecordedTime"`
	ResultToken                *string                     `json:"ResultToken"`
}
