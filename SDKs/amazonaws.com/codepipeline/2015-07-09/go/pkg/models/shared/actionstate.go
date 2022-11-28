package shared

// ActionState
// Represents information about the state of an action.
type ActionState struct {
	ActionName      *string          `json:"actionName,omitempty"`
	CurrentRevision *ActionRevision  `json:"currentRevision,omitempty"`
	EntityURL       *string          `json:"entityUrl,omitempty"`
	LatestExecution *ActionExecution `json:"latestExecution,omitempty"`
	RevisionURL     *string          `json:"revisionUrl,omitempty"`
}
