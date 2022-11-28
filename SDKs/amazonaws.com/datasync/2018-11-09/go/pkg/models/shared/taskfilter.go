package shared

// TaskFilter
// You can use API filters to narrow down the list of resources returned by <code>ListTasks</code>. For example, to retrieve all tasks on a source location, you can use <code>ListTasks</code> with filter name <code>LocationId</code> and <code>Operator Equals</code> with the ARN for the location.
type TaskFilter struct {
	Name     TaskFilterNameEnum `json:"Name"`
	Operator OperatorEnum       `json:"Operator"`
	Values   []string           `json:"Values"`
}
