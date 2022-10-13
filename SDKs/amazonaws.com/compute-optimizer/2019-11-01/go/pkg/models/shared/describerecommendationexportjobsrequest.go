package shared

type DescribeRecommendationExportJobsRequest struct {
	Filters    []JobFilter `json:"filters"`
	JobIds     []string    `json:"jobIds"`
	MaxResults *int64      `json:"maxResults"`
	NextToken  *string     `json:"nextToken"`
}
