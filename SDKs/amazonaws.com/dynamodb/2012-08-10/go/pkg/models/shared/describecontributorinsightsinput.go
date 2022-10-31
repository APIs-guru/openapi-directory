package shared

type DescribeContributorInsightsInput struct {
	IndexName *string `json:"IndexName,omitempty"`
	TableName string  `json:"TableName"`
}
