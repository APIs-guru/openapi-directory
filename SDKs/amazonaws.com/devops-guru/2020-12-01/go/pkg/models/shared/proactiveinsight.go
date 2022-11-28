package shared

// ProactiveInsight
// Details about a proactive insight. This object is returned by <code>ListInsights</code>.
type ProactiveInsight struct {
	ID                  *string              `json:"Id,omitempty"`
	InsightTimeRange    *InsightTimeRange    `json:"InsightTimeRange,omitempty"`
	Name                *string              `json:"Name,omitempty"`
	PredictionTimeRange *PredictionTimeRange `json:"PredictionTimeRange,omitempty"`
	ResourceCollection  *ResourceCollection  `json:"ResourceCollection,omitempty"`
	Severity            *InsightSeverityEnum `json:"Severity,omitempty"`
	SsmOpsItemID        *string              `json:"SsmOpsItemId,omitempty"`
	Status              *InsightStatusEnum   `json:"Status,omitempty"`
}
