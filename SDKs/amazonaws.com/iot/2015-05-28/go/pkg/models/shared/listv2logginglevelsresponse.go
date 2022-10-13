package shared

type ListV2LoggingLevelsResponse struct {
	LogTargetConfigurations []LogTargetConfiguration `json:"logTargetConfigurations"`
	NextToken               *string                  `json:"nextToken"`
}
