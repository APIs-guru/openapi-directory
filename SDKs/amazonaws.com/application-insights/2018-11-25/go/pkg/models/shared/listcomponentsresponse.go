package shared

type ListComponentsResponse struct {
	ApplicationComponentList []ApplicationComponent `json:"ApplicationComponentList"`
	NextToken                *string                `json:"NextToken"`
}
