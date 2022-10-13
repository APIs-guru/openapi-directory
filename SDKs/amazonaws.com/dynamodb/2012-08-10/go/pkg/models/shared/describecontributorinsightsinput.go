package shared

type DescribeContributorInsightsInput struct {
	IndexName *string `json:"IndexName"`
	TableName string  `json:"TableName"`
}
