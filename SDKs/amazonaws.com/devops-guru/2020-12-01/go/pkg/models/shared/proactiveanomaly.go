package shared

import (
	"time"
)

// ProactiveAnomaly
// Information about an anomaly. This object is returned by <code>ListAnomalies</code>.
type ProactiveAnomaly struct {
	AnomalyReportedTimeRange *AnomalyReportedTimeRange `json:"AnomalyReportedTimeRange,omitempty"`
	AnomalyTimeRange         *AnomalyTimeRange         `json:"AnomalyTimeRange,omitempty"`
	AssociatedInsightID      *string                   `json:"AssociatedInsightId,omitempty"`
	ID                       *string                   `json:"Id,omitempty"`
	Limit                    *float64                  `json:"Limit,omitempty"`
	PredictionTimeRange      *PredictionTimeRange      `json:"PredictionTimeRange,omitempty"`
	ResourceCollection       *ResourceCollection       `json:"ResourceCollection,omitempty"`
	Severity                 *AnomalySeverityEnum      `json:"Severity,omitempty"`
	SourceDetails            *AnomalySourceDetails     `json:"SourceDetails,omitempty"`
	Status                   *AnomalyStatusEnum        `json:"Status,omitempty"`
	UpdateTime               *time.Time                `json:"UpdateTime,omitempty"`
}
