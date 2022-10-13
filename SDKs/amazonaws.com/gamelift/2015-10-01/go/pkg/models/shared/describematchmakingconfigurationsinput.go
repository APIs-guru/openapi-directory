package shared

type DescribeMatchmakingConfigurationsInput struct {
	Limit       *int64   `json:"Limit"`
	Names       []string `json:"Names"`
	NextToken   *string  `json:"NextToken"`
	RuleSetName *string  `json:"RuleSetName"`
}
