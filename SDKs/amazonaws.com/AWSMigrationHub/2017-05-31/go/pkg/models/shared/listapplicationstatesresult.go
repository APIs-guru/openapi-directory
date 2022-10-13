package shared

type ListApplicationStatesResult struct {
	ApplicationStateList []ApplicationState `json:"ApplicationStateList"`
	NextToken            *string            `json:"NextToken"`
}
