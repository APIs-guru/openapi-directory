package shared

type ProactiveInsightSummary struct {
	ID                  *string              `json:"Id"`
	InsightTimeRange    *InsightTimeRange    `json:"InsightTimeRange"`
	Name                *string              `json:"Name"`
	PredictionTimeRange *PredictionTimeRange `json:"PredictionTimeRange"`
	ResourceCollection  *ResourceCollection  `json:"ResourceCollection"`
	ServiceCollection   *ServiceCollection   `json:"ServiceCollection"`
	Severity            *InsightSeverityEnum `json:"Severity"`
	Status              *InsightStatusEnum   `json:"Status"`
}
