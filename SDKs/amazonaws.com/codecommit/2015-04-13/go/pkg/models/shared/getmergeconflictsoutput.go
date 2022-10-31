package shared

type GetMergeConflictsOutput struct {
	BaseCommitID         *string            `json:"baseCommitId,omitempty"`
	ConflictMetadataList []ConflictMetadata `json:"conflictMetadataList"`
	DestinationCommitID  string             `json:"destinationCommitId"`
	Mergeable            bool               `json:"mergeable"`
	NextToken            *string            `json:"nextToken,omitempty"`
	SourceCommitID       string             `json:"sourceCommitId"`
}
