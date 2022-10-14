package shared

type ControlMappingSource struct {
	SourceDescription   *string                `json:"sourceDescription,omitempty"`
	SourceFrequency     *SourceFrequencyEnum   `json:"sourceFrequency,omitempty"`
	SourceID            *string                `json:"sourceId,omitempty"`
	SourceKeyword       *SourceKeyword         `json:"sourceKeyword,omitempty"`
	SourceName          *string                `json:"sourceName,omitempty"`
	SourceSetUpOption   *SourceSetUpOptionEnum `json:"sourceSetUpOption,omitempty"`
	SourceType          *SourceTypeEnum        `json:"sourceType,omitempty"`
	TroubleshootingText *string                `json:"troubleshootingText,omitempty"`
}
