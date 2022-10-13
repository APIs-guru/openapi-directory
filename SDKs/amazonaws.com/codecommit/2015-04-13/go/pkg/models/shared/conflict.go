package shared

type Conflict struct {
	ConflictMetadata *ConflictMetadata `json:"conflictMetadata"`
	MergeHunks       []MergeHunk       `json:"mergeHunks"`
}
