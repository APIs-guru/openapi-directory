package shared

// SearchQuantumTasksFilter
// A filter to use to search for tasks.
type SearchQuantumTasksFilter struct {
	Name     string                               `json:"name"`
	Operator SearchQuantumTasksFilterOperatorEnum `json:"operator"`
	Values   []string                             `json:"values"`
}
