package shared

type SourceTableFeatureDetails struct {
	GlobalSecondaryIndexes []GlobalSecondaryIndexInfo `json:"GlobalSecondaryIndexes"`
	LocalSecondaryIndexes  []LocalSecondaryIndexInfo  `json:"LocalSecondaryIndexes"`
	SseDescription         *SseDescription            `json:"SSEDescription"`
	StreamDescription      *StreamSpecification       `json:"StreamDescription"`
	TimeToLiveDescription  *TimeToLiveDescription     `json:"TimeToLiveDescription"`
}
