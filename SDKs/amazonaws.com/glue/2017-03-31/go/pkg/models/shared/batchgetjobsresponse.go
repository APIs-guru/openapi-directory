package shared

type BatchGetJobsResponse struct {
	Jobs         []Job    `json:"Jobs"`
	JobsNotFound []string `json:"JobsNotFound"`
}
