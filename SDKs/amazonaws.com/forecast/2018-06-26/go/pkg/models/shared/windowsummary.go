package shared

import (
	"time"
)

type WindowSummary struct {
	EvaluationType  *EvaluationTypeEnum `json:"EvaluationType"`
	ItemCount       *int64              `json:"ItemCount"`
	Metrics         *Metrics            `json:"Metrics"`
	TestWindowEnd   *time.Time          `json:"TestWindowEnd"`
	TestWindowStart *time.Time          `json:"TestWindowStart"`
}
