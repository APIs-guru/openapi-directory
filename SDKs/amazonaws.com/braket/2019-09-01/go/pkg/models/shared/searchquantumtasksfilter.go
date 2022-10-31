package shared



type SearchQuantumTasksFilter struct {
    Name string `json:"name"`
    Operator SearchQuantumTasksFilterOperatorEnum `json:"operator"`
    Values []string `json:"values"`
    
}

