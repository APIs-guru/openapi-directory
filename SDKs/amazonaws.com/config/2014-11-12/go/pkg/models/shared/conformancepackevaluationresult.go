package shared

import (
	"time"
)

type ConformancePackEvaluationResult struct {
	Annotation                 *string                           `json:"Annotation"`
	ComplianceType             ConformancePackComplianceTypeEnum `json:"ComplianceType"`
	ConfigRuleInvokedTime      time.Time                         `json:"ConfigRuleInvokedTime"`
	EvaluationResultIdentifier EvaluationResultIdentifier        `json:"EvaluationResultIdentifier"`
	ResultRecordedTime         time.Time                         `json:"ResultRecordedTime"`
}
