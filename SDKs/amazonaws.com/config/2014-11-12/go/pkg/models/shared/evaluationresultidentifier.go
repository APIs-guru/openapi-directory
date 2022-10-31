package shared

import (
"time")

type EvaluationResultIdentifier struct {
    EvaluationResultQualifier *EvaluationResultQualifier `json:"EvaluationResultQualifier,omitempty"`
    OrderingTimestamp *time.Time `json:"OrderingTimestamp,omitempty"`
    
}

