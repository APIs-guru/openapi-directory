package shared

type ListJobsResponse struct {
	JobNames  []string `json:"JobNames"`
	NextToken *string  `json:"NextToken"`
}
