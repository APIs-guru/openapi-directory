package shared

type GetMergeConflictsOutput struct {
	BaseCommitID         *string            `json:"baseCommitId"`
	ConflictMetadataList []ConflictMetadata `json:"conflictMetadataList"`
	DestinationCommitID  string             `json:"destinationCommitId"`
	Mergeable            bool               `json:"mergeable"`
	NextToken            *string            `json:"nextToken"`
	SourceCommitID       string             `json:"sourceCommitId"`
}
