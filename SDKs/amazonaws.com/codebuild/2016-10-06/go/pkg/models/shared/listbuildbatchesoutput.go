package shared

type ListBuildBatchesOutput struct {
	Ids       []string `json:"ids"`
	NextToken *string  `json:"nextToken"`
}
