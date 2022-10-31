package shared

type ListExperimentsResponse struct {
	Experiments []ExperimentSummary `json:"experiments,omitempty"`
	NextToken   *string             `json:"nextToken,omitempty"`
}
