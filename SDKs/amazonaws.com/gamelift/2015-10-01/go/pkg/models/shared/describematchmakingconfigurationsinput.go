package shared

type DescribeMatchmakingConfigurationsInput struct {
	Limit       *int64   `json:"Limit,omitempty"`
	Names       []string `json:"Names,omitempty"`
	NextToken   *string  `json:"NextToken,omitempty"`
	RuleSetName *string  `json:"RuleSetName,omitempty"`
}
