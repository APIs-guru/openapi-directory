package shared

// ListAliasesInput
// Represents the input for a request operation.
type ListAliasesInput struct {
	Limit               *int64                   `json:"Limit,omitempty"`
	Name                *string                  `json:"Name,omitempty"`
	NextToken           *string                  `json:"NextToken,omitempty"`
	RoutingStrategyType *RoutingStrategyTypeEnum `json:"RoutingStrategyType,omitempty"`
}
