package shared

type DescribeMergeConflictsOutput struct {
	BaseCommitID        *string          `json:"baseCommitId"`
	ConflictMetadata    ConflictMetadata `json:"conflictMetadata"`
	DestinationCommitID string           `json:"destinationCommitId"`
	MergeHunks          []MergeHunk      `json:"mergeHunks"`
	NextToken           *string          `json:"nextToken"`
	SourceCommitID      string           `json:"sourceCommitId"`
}
