package shared

type ListStepsInput struct {
	ClusterID  string          `json:"ClusterId"`
	Marker     *string         `json:"Marker,omitempty"`
	StepIds    []string        `json:"StepIds,omitempty"`
	StepStates []StepStateEnum `json:"StepStates,omitempty"`
}
