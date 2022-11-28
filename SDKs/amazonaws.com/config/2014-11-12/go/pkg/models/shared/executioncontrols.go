package shared

// ExecutionControls
// The controls that Config uses for executing remediations.
type ExecutionControls struct {
	SsmControls *SsmControls `json:"SsmControls,omitempty"`
}
