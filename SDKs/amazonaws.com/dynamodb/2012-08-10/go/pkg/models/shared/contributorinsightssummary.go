package shared

// ContributorInsightsSummary
// Represents a Contributor Insights summary entry.
type ContributorInsightsSummary struct {
	ContributorInsightsStatus *ContributorInsightsStatusEnum `json:"ContributorInsightsStatus,omitempty"`
	IndexName                 *string                        `json:"IndexName,omitempty"`
	TableName                 *string                        `json:"TableName,omitempty"`
}
