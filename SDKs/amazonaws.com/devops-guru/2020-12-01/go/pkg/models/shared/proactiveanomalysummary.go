package shared

import (
	"time"
)

type ProactiveAnomalySummary struct {
	AnomalyReportedTimeRange *AnomalyReportedTimeRange `json:"AnomalyReportedTimeRange"`
	AnomalyTimeRange         *AnomalyTimeRange         `json:"AnomalyTimeRange"`
	AssociatedInsightID      *string                   `json:"AssociatedInsightId"`
	ID                       *string                   `json:"Id"`
	Limit                    *float64                  `json:"Limit"`
	PredictionTimeRange      *PredictionTimeRange      `json:"PredictionTimeRange"`
	ResourceCollection       *ResourceCollection       `json:"ResourceCollection"`
	Severity                 *AnomalySeverityEnum      `json:"Severity"`
	SourceDetails            *AnomalySourceDetails     `json:"SourceDetails"`
	Status                   *AnomalyStatusEnum        `json:"Status"`
	UpdateTime               *time.Time                `json:"UpdateTime"`
}
