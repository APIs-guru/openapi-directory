package shared

type ListEnvironmentsResponse struct {
	Environments []Environment `json:"environments,omitempty"`
	NextToken    *string       `json:"nextToken,omitempty"`
}
