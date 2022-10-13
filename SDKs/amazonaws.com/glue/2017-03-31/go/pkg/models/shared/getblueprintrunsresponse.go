package shared

type GetBlueprintRunsResponse struct {
	BlueprintRuns []BlueprintRun `json:"BlueprintRuns"`
	NextToken     *string        `json:"NextToken"`
}
