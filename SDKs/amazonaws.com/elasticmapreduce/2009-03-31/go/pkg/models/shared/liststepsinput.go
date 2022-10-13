package shared

type ListStepsInput struct {
	ClusterID  string          `json:"ClusterId"`
	Marker     *string         `json:"Marker"`
	StepIds    []string        `json:"StepIds"`
	StepStates []StepStateEnum `json:"StepStates"`
}
