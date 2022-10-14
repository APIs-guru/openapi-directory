package shared

type ListFlowsResponse struct {
	Flows     []FlowDefinition `json:"flows,omitempty"`
	NextToken *string          `json:"nextToken,omitempty"`
}
