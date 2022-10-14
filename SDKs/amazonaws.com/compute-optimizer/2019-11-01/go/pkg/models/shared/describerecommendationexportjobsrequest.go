package shared

type DescribeRecommendationExportJobsRequest struct {
	Filters    []JobFilter `json:"filters,omitempty"`
	JobIds     []string    `json:"jobIds,omitempty"`
	MaxResults *int64      `json:"maxResults,omitempty"`
	NextToken  *string     `json:"nextToken,omitempty"`
}
