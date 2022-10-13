package shared

type SearchQuantumTasksResponse struct {
	NextToken    *string              `json:"nextToken"`
	QuantumTasks []QuantumTaskSummary `json:"quantumTasks"`
}
