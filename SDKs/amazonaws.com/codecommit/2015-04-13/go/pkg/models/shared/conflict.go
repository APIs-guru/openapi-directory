package shared

type Conflict struct {
	ConflictMetadata *ConflictMetadata `json:"conflictMetadata,omitempty"`
	MergeHunks       []MergeHunk       `json:"mergeHunks,omitempty"`
}
