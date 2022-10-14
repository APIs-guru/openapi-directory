package shared

type DescribeJobResponse struct {
	DocumentSource *string `json:"documentSource,omitempty"`
	Job            *Job    `json:"job,omitempty"`
}
