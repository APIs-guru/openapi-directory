package shared

type SourceTableFeatureDetails struct {
	GlobalSecondaryIndexes []GlobalSecondaryIndexInfo `json:"GlobalSecondaryIndexes,omitempty"`
	LocalSecondaryIndexes  []LocalSecondaryIndexInfo  `json:"LocalSecondaryIndexes,omitempty"`
	SseDescription         *SseDescription            `json:"SSEDescription,omitempty"`
	StreamDescription      *StreamSpecification       `json:"StreamDescription,omitempty"`
	TimeToLiveDescription  *TimeToLiveDescription     `json:"TimeToLiveDescription,omitempty"`
}
