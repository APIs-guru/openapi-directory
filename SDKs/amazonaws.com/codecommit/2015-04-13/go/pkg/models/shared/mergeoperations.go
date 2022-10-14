package shared

type MergeOperations struct {
	Destination *ChangeTypeEnumEnum `json:"destination,omitempty"`
	Source      *ChangeTypeEnumEnum `json:"source,omitempty"`
}
