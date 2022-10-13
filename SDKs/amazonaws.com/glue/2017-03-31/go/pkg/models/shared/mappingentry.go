package shared

type MappingEntry struct {
	SourcePath  *string `json:"SourcePath"`
	SourceTable *string `json:"SourceTable"`
	SourceType  *string `json:"SourceType"`
	TargetPath  *string `json:"TargetPath"`
	TargetTable *string `json:"TargetTable"`
	TargetType  *string `json:"TargetType"`
}
