package shared

type ProactiveInsight struct {
	ID                  *string              `json:"Id"`
	InsightTimeRange    *InsightTimeRange    `json:"InsightTimeRange"`
	Name                *string              `json:"Name"`
	PredictionTimeRange *PredictionTimeRange `json:"PredictionTimeRange"`
	ResourceCollection  *ResourceCollection  `json:"ResourceCollection"`
	Severity            *InsightSeverityEnum `json:"Severity"`
	SsmOpsItemID        *string              `json:"SsmOpsItemId"`
	Status              *InsightStatusEnum   `json:"Status"`
}
