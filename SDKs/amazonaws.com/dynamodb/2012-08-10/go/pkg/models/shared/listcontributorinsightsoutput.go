package shared

type ListContributorInsightsOutput struct {
	ContributorInsightsSummaries []ContributorInsightsSummary `json:"ContributorInsightsSummaries"`
	NextToken                    *string                      `json:"NextToken"`
}
