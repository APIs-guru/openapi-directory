package shared

type ListContributorInsightsInput struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
	TableName  *string `json:"TableName"`
}
