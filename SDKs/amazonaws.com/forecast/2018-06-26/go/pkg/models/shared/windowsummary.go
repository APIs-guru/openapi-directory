package shared

import (
	"time"
)

// WindowSummary
// <p>The metrics for a time range within the evaluation portion of a dataset. This object is part of the <a>EvaluationResult</a> object.</p> <p>The <code>TestWindowStart</code> and <code>TestWindowEnd</code> parameters are determined by the <code>BackTestWindowOffset</code> parameter of the <a>EvaluationParameters</a> object.</p>
type WindowSummary struct {
	EvaluationType  *EvaluationTypeEnum `json:"EvaluationType,omitempty"`
	ItemCount       *int64              `json:"ItemCount,omitempty"`
	Metrics         *Metrics            `json:"Metrics,omitempty"`
	TestWindowEnd   *time.Time          `json:"TestWindowEnd,omitempty"`
	TestWindowStart *time.Time          `json:"TestWindowStart,omitempty"`
}
