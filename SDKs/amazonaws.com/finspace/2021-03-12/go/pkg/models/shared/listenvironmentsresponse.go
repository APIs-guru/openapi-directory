package shared

type ListEnvironmentsResponse struct {
	Environments []Environment `json:"environments"`
	NextToken    *string       `json:"nextToken"`
}
