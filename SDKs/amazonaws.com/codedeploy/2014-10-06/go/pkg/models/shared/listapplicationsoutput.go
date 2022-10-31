package shared

type ListApplicationsOutput struct {
	Applications []string `json:"applications,omitempty"`
	NextToken    *string  `json:"nextToken,omitempty"`
}
