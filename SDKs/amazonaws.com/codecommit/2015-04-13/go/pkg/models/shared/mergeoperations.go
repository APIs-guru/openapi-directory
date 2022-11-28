package shared

// MergeOperations
// Information about the file operation conflicts in a merge operation.
type MergeOperations struct {
	Destination *ChangeTypeEnumEnum `json:"destination,omitempty"`
	Source      *ChangeTypeEnumEnum `json:"source,omitempty"`
}
