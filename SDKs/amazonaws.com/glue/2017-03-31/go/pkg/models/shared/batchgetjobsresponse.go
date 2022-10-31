package shared

type BatchGetJobsResponse struct {
	Jobs         []Job    `json:"Jobs,omitempty"`
	JobsNotFound []string `json:"JobsNotFound,omitempty"`
}
