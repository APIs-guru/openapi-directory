package shared

// DetectorState
// Information about the current state of the detector instance.
type DetectorState struct {
	StateName string     `json:"stateName"`
	Timers    []Timer    `json:"timers"`
	Variables []Variable `json:"variables"`
}
