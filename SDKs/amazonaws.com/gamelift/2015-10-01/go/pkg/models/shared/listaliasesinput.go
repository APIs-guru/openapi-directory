package shared

type ListAliasesInput struct {
	Limit               *int64                   `json:"Limit"`
	Name                *string                  `json:"Name"`
	NextToken           *string                  `json:"NextToken"`
	RoutingStrategyType *RoutingStrategyTypeEnum `json:"RoutingStrategyType"`
}
