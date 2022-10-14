package shared

type ProactiveInsightSummary struct {
	ID                  *string              `json:"Id,omitempty"`
	InsightTimeRange    *InsightTimeRange    `json:"InsightTimeRange,omitempty"`
	Name                *string              `json:"Name,omitempty"`
	PredictionTimeRange *PredictionTimeRange `json:"PredictionTimeRange,omitempty"`
	ResourceCollection  *ResourceCollection  `json:"ResourceCollection,omitempty"`
	ServiceCollection   *ServiceCollection   `json:"ServiceCollection,omitempty"`
	Severity            *InsightSeverityEnum `json:"Severity,omitempty"`
	Status              *InsightStatusEnum   `json:"Status,omitempty"`
}
