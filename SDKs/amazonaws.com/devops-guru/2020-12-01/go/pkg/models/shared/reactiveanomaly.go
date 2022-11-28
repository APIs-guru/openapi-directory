package shared

// ReactiveAnomaly
// Details about a reactive anomaly. This object is returned by <code>ListAnomalies</code>.
type ReactiveAnomaly struct {
	AnomalyReportedTimeRange *AnomalyReportedTimeRange `json:"AnomalyReportedTimeRange,omitempty"`
	AnomalyTimeRange         *AnomalyTimeRange         `json:"AnomalyTimeRange,omitempty"`
	AssociatedInsightID      *string                   `json:"AssociatedInsightId,omitempty"`
	ID                       *string                   `json:"Id,omitempty"`
	ResourceCollection       *ResourceCollection       `json:"ResourceCollection,omitempty"`
	Severity                 *AnomalySeverityEnum      `json:"Severity,omitempty"`
	SourceDetails            *AnomalySourceDetails     `json:"SourceDetails,omitempty"`
	Status                   *AnomalyStatusEnum        `json:"Status,omitempty"`
}
