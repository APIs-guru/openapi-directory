package shared

// SourceTableFeatureDetails
// Contains the details of the features enabled on the table when the backup was created. For example, LSIs, GSIs, streams, TTL.
type SourceTableFeatureDetails struct {
	GlobalSecondaryIndexes []GlobalSecondaryIndexInfo `json:"GlobalSecondaryIndexes,omitempty"`
	LocalSecondaryIndexes  []LocalSecondaryIndexInfo  `json:"LocalSecondaryIndexes,omitempty"`
	SseDescription         *SseDescription            `json:"SSEDescription,omitempty"`
	StreamDescription      *StreamSpecification       `json:"StreamDescription,omitempty"`
	TimeToLiveDescription  *TimeToLiveDescription     `json:"TimeToLiveDescription,omitempty"`
}
