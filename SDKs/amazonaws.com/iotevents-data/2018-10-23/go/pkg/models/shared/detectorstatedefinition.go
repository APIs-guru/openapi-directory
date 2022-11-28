package shared

// DetectorStateDefinition
// The new state, variable values, and timer settings of the detector (instance).
type DetectorStateDefinition struct {
	StateName string               `json:"stateName"`
	Timers    []TimerDefinition    `json:"timers"`
	Variables []VariableDefinition `json:"variables"`
}
