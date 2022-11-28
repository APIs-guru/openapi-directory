package shared

// DescribeMatchmakingConfigurationsOutput
// Represents the returned data in response to a request operation.
type DescribeMatchmakingConfigurationsOutput struct {
	Configurations []MatchmakingConfiguration `json:"Configurations,omitempty"`
	NextToken      *string                    `json:"NextToken,omitempty"`
}
