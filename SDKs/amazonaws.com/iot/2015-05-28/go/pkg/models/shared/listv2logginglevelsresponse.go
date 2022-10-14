package shared

type ListV2LoggingLevelsResponse struct {
	LogTargetConfigurations []LogTargetConfiguration `json:"logTargetConfigurations,omitempty"`
	NextToken               *string                  `json:"nextToken,omitempty"`
}
