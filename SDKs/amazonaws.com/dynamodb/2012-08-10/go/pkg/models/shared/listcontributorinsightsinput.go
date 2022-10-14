package shared

type ListContributorInsightsInput struct {
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
	TableName  *string `json:"TableName,omitempty"`
}
