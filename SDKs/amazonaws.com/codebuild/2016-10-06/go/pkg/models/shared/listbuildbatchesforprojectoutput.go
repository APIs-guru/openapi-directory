package shared

type ListBuildBatchesForProjectOutput struct {
	Ids       []string `json:"ids"`
	NextToken *string  `json:"nextToken"`
}
