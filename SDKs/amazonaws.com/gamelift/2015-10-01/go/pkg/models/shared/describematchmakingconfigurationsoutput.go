package shared

type DescribeMatchmakingConfigurationsOutput struct {
	Configurations []MatchmakingConfiguration `json:"Configurations,omitempty"`
	NextToken      *string                    `json:"NextToken,omitempty"`
}
