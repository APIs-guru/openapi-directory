package shared

type ControlMappingSource struct {
	SourceDescription   *string                `json:"sourceDescription"`
	SourceFrequency     *SourceFrequencyEnum   `json:"sourceFrequency"`
	SourceID            *string                `json:"sourceId"`
	SourceKeyword       *SourceKeyword         `json:"sourceKeyword"`
	SourceName          *string                `json:"sourceName"`
	SourceSetUpOption   *SourceSetUpOptionEnum `json:"sourceSetUpOption"`
	SourceType          *SourceTypeEnum        `json:"sourceType"`
	TroubleshootingText *string                `json:"troubleshootingText"`
}
