package shared

import (
	"time"
)

// EvaluationResultIdentifier
// Uniquely identifies an evaluation result.
type EvaluationResultIdentifier struct {
	EvaluationResultQualifier *EvaluationResultQualifier `json:"EvaluationResultQualifier,omitempty"`
	OrderingTimestamp         *time.Time                 `json:"OrderingTimestamp,omitempty"`
}
