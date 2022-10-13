package shared

type ListJobsResponse struct {
	JobSummaryList []JobSummary `json:"jobSummaryList"`
	NextToken      *string      `json:"nextToken"`
}
