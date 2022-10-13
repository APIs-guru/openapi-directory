package shared

type ReactiveInsight struct {
	ID                 *string              `json:"Id"`
	InsightTimeRange   *InsightTimeRange    `json:"InsightTimeRange"`
	Name               *string              `json:"Name"`
	ResourceCollection *ResourceCollection  `json:"ResourceCollection"`
	Severity           *InsightSeverityEnum `json:"Severity"`
	SsmOpsItemID       *string              `json:"SsmOpsItemId"`
	Status             *InsightStatusEnum   `json:"Status"`
}
