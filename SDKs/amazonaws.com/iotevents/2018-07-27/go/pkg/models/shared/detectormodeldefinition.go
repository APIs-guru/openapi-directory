package shared

type DetectorModelDefinition struct {
	InitialStateName string  `json:"initialStateName"`
	States           []State `json:"states"`
}
