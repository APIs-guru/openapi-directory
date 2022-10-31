package shared



type GetBlueprintRunsResponse struct {
    BlueprintRuns []BlueprintRun `json:"BlueprintRuns,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

