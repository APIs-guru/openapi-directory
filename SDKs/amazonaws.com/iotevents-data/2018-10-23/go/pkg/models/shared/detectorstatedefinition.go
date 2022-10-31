package shared

type DetectorStateDefinition struct {
	StateName string               `json:"stateName"`
	Timers    []TimerDefinition    `json:"timers"`
	Variables []VariableDefinition `json:"variables"`
}
