package shared

// Conflict
// Information about conflicts in a merge operation.
type Conflict struct {
	ConflictMetadata *ConflictMetadata `json:"conflictMetadata,omitempty"`
	MergeHunks       []MergeHunk       `json:"mergeHunks,omitempty"`
}
