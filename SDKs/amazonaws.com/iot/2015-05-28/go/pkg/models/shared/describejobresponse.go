package shared

type DescribeJobResponse struct {
	DocumentSource *string `json:"documentSource"`
	Job            *Job    `json:"job"`
}
