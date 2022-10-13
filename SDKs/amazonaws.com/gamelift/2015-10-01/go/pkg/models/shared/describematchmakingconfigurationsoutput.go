package shared

type DescribeMatchmakingConfigurationsOutput struct {
	Configurations []MatchmakingConfiguration `json:"Configurations"`
	NextToken      *string                    `json:"NextToken"`
}
