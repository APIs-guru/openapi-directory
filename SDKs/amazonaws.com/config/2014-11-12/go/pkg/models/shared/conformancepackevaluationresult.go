package shared

import (
	"time"
)

// ConformancePackEvaluationResult
// The details of a conformance pack evaluation. Provides Config rule and Amazon Web Services resource type that was evaluated, the compliance of the conformance pack, related time stamps, and supplementary information.
type ConformancePackEvaluationResult struct {
	Annotation                 *string                           `json:"Annotation,omitempty"`
	ComplianceType             ConformancePackComplianceTypeEnum `json:"ComplianceType"`
	ConfigRuleInvokedTime      time.Time                         `json:"ConfigRuleInvokedTime"`
	EvaluationResultIdentifier EvaluationResultIdentifier        `json:"EvaluationResultIdentifier"`
	ResultRecordedTime         time.Time                         `json:"ResultRecordedTime"`
}
