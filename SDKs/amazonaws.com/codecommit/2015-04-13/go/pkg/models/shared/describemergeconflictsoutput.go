package shared

type DescribeMergeConflictsOutput struct {
	BaseCommitID        *string          `json:"baseCommitId,omitempty"`
	ConflictMetadata    ConflictMetadata `json:"conflictMetadata"`
	DestinationCommitID string           `json:"destinationCommitId"`
	MergeHunks          []MergeHunk      `json:"mergeHunks"`
	NextToken           *string          `json:"nextToken,omitempty"`
	SourceCommitID      string           `json:"sourceCommitId"`
}
