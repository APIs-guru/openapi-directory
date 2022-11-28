package shared

// DetectorModelDefinition
// Information that defines how a detector operates.
type DetectorModelDefinition struct {
	InitialStateName string  `json:"initialStateName"`
	States           []State `json:"states"`
}
