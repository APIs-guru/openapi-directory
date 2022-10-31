package shared

type ListBuildBatchesForProjectOutput struct {
	Ids       []string `json:"ids,omitempty"`
	NextToken *string  `json:"nextToken,omitempty"`
}
