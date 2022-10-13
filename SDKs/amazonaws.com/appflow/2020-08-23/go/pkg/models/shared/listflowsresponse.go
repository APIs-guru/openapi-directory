package shared

type ListFlowsResponse struct {
	Flows     []FlowDefinition `json:"flows"`
	NextToken *string          `json:"nextToken"`
}
