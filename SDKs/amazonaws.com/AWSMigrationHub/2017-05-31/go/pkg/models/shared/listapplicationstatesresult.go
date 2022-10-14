package shared

type ListApplicationStatesResult struct {
	ApplicationStateList []ApplicationState `json:"ApplicationStateList,omitempty"`
	NextToken            *string            `json:"NextToken,omitempty"`
}
