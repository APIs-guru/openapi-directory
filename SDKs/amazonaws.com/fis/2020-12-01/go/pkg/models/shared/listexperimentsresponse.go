package shared

type ListExperimentsResponse struct {
	Experiments []ExperimentSummary `json:"experiments"`
	NextToken   *string             `json:"nextToken"`
}
