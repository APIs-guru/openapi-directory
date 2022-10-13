package shared

type GetLoggerDefinitionVersionResponse struct {
	Arn               *string                  `json:"Arn"`
	CreationTimestamp *string                  `json:"CreationTimestamp"`
	Definition        *LoggerDefinitionVersion `json:"Definition"`
	ID                *string                  `json:"Id"`
	Version           *string                  `json:"Version"`
}
