package shared

type CreateControlMappingSource struct {
	SourceDescription   *string                `json:"sourceDescription"`
	SourceFrequency     *SourceFrequencyEnum   `json:"sourceFrequency"`
	SourceKeyword       *SourceKeyword         `json:"sourceKeyword"`
	SourceName          *string                `json:"sourceName"`
	SourceSetUpOption   *SourceSetUpOptionEnum `json:"sourceSetUpOption"`
	SourceType          *SourceTypeEnum        `json:"sourceType"`
	TroubleshootingText *string                `json:"troubleshootingText"`
}
