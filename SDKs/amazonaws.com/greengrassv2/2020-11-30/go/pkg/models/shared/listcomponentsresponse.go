package shared

type ListComponentsResponse struct {
	Components []Component `json:"components"`
	NextToken  *string     `json:"nextToken"`
}
