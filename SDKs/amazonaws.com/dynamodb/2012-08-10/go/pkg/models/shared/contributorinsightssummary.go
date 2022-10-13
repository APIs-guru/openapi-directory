package shared

type ContributorInsightsSummary struct {
	ContributorInsightsStatus *ContributorInsightsStatusEnum `json:"ContributorInsightsStatus"`
	IndexName                 *string                        `json:"IndexName"`
	TableName                 *string                        `json:"TableName"`
}
