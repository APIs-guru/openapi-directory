package shared

type UpdateContributorInsightsInput struct {
	ContributorInsightsAction ContributorInsightsActionEnum `json:"ContributorInsightsAction"`
	IndexName                 *string                       `json:"IndexName,omitempty"`
	TableName                 string                        `json:"TableName"`
}
