package shared

type ActionState struct {
	ActionName      *string          `json:"actionName"`
	CurrentRevision *ActionRevision  `json:"currentRevision"`
	EntityURL       *string          `json:"entityUrl"`
	LatestExecution *ActionExecution `json:"latestExecution"`
	RevisionURL     *string          `json:"revisionUrl"`
}
