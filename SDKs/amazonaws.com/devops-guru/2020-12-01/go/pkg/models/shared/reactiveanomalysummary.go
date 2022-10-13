package shared

type ReactiveAnomalySummary struct {
	AnomalyReportedTimeRange *AnomalyReportedTimeRange `json:"AnomalyReportedTimeRange"`
	AnomalyTimeRange         *AnomalyTimeRange         `json:"AnomalyTimeRange"`
	AssociatedInsightID      *string                   `json:"AssociatedInsightId"`
	ID                       *string                   `json:"Id"`
	ResourceCollection       *ResourceCollection       `json:"ResourceCollection"`
	Severity                 *AnomalySeverityEnum      `json:"Severity"`
	SourceDetails            *AnomalySourceDetails     `json:"SourceDetails"`
	Status                   *AnomalyStatusEnum        `json:"Status"`
}
