package shared

type UpdateContributorInsightsInput struct {
	ContributorInsightsAction ContributorInsightsActionEnum `json:"ContributorInsightsAction"`
	IndexName                 *string                       `json:"IndexName"`
	TableName                 string                        `json:"TableName"`
}
