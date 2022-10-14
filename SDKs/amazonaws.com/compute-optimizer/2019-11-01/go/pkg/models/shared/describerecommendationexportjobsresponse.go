package shared

type DescribeRecommendationExportJobsResponse struct {
	NextToken                *string                   `json:"nextToken,omitempty"`
	RecommendationExportJobs []RecommendationExportJob `json:"recommendationExportJobs,omitempty"`
}
