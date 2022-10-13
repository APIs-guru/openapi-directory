package shared

import (
	"time"
)

type EvaluationResultIdentifier struct {
	EvaluationResultQualifier *EvaluationResultQualifier `json:"EvaluationResultQualifier"`
	OrderingTimestamp         *time.Time                 `json:"OrderingTimestamp"`
}
