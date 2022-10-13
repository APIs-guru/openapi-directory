package shared

type ReactiveInsightSummary struct {
	ID                 *string              `json:"Id"`
	InsightTimeRange   *InsightTimeRange    `json:"InsightTimeRange"`
	Name               *string              `json:"Name"`
	ResourceCollection *ResourceCollection  `json:"ResourceCollection"`
	ServiceCollection  *ServiceCollection   `json:"ServiceCollection"`
	Severity           *InsightSeverityEnum `json:"Severity"`
	Status             *InsightStatusEnum   `json:"Status"`
}
