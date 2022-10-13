package shared

type GetJobsResponse struct {
	Jobs      []Job   `json:"Jobs"`
	NextToken *string `json:"NextToken"`
}
