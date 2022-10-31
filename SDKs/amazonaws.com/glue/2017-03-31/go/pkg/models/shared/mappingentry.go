package shared

type MappingEntry struct {
	SourcePath  *string `json:"SourcePath,omitempty"`
	SourceTable *string `json:"SourceTable,omitempty"`
	SourceType  *string `json:"SourceType,omitempty"`
	TargetPath  *string `json:"TargetPath,omitempty"`
	TargetTable *string `json:"TargetTable,omitempty"`
	TargetType  *string `json:"TargetType,omitempty"`
}
