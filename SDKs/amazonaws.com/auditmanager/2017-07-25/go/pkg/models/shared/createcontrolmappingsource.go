package shared

// CreateControlMappingSource
//
//	Control mapping fields that represent the source for evidence collection, along with related parameters and metadata. This does not contain <code>mappingID</code>.
type CreateControlMappingSource struct {
	SourceDescription   *string                `json:"sourceDescription,omitempty"`
	SourceFrequency     *SourceFrequencyEnum   `json:"sourceFrequency,omitempty"`
	SourceKeyword       *SourceKeyword         `json:"sourceKeyword,omitempty"`
	SourceName          *string                `json:"sourceName,omitempty"`
	SourceSetUpOption   *SourceSetUpOptionEnum `json:"sourceSetUpOption,omitempty"`
	SourceType          *SourceTypeEnum        `json:"sourceType,omitempty"`
	TroubleshootingText *string                `json:"troubleshootingText,omitempty"`
}
