package shared

// ReactiveInsightSummary
//
//	Information about a reactive insight. This object is returned by <code>DescribeInsight.</code>
type ReactiveInsightSummary struct {
	ID                 *string              `json:"Id,omitempty"`
	InsightTimeRange   *InsightTimeRange    `json:"InsightTimeRange,omitempty"`
	Name               *string              `json:"Name,omitempty"`
	ResourceCollection *ResourceCollection  `json:"ResourceCollection,omitempty"`
	ServiceCollection  *ServiceCollection   `json:"ServiceCollection,omitempty"`
	Severity           *InsightSeverityEnum `json:"Severity,omitempty"`
	Status             *InsightStatusEnum   `json:"Status,omitempty"`
}
