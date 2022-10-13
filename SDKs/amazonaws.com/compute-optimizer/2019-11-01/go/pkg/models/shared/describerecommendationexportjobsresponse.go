package shared

type DescribeRecommendationExportJobsResponse struct {
	NextToken                *string                   `json:"nextToken"`
	RecommendationExportJobs []RecommendationExportJob `json:"recommendationExportJobs"`
}
