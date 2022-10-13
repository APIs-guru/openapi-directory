package shared

type BatchDescribeMergeConflictsInput struct {
	ConflictDetailLevel        *ConflictDetailLevelTypeEnumEnum        `json:"conflictDetailLevel"`
	ConflictResolutionStrategy *ConflictResolutionStrategyTypeEnumEnum `json:"conflictResolutionStrategy"`
	DestinationCommitSpecifier string                                  `json:"destinationCommitSpecifier"`
	FilePaths                  []string                                `json:"filePaths"`
	MaxConflictFiles           *int64                                  `json:"maxConflictFiles"`
	MaxMergeHunks              *int64                                  `json:"maxMergeHunks"`
	MergeOption                MergeOptionTypeEnumEnum                 `json:"mergeOption"`
	NextToken                  *string                                 `json:"nextToken"`
	RepositoryName             string                                  `json:"repositoryName"`
	SourceCommitSpecifier      string                                  `json:"sourceCommitSpecifier"`
}
