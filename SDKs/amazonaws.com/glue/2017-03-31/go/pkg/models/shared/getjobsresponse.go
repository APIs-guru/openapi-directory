package shared

type GetJobsResponse struct {
	Jobs      []Job   `json:"Jobs,omitempty"`
	NextToken *string `json:"NextToken,omitempty"`
}
