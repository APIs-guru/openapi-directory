package shared

import (
	"time"
)

// EvaluationResult
// The details of an Config evaluation. Provides the Amazon Web Services resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information.
type EvaluationResult struct {
	Annotation                 *string                     `json:"Annotation,omitempty"`
	ComplianceType             *ComplianceTypeEnum         `json:"ComplianceType,omitempty"`
	ConfigRuleInvokedTime      *time.Time                  `json:"ConfigRuleInvokedTime,omitempty"`
	EvaluationResultIdentifier *EvaluationResultIdentifier `json:"EvaluationResultIdentifier,omitempty"`
	ResultRecordedTime         *time.Time                  `json:"ResultRecordedTime,omitempty"`
	ResultToken                *string                     `json:"ResultToken,omitempty"`
}
