package shared

type BatchDescribeMergeConflictsInput struct {
	ConflictDetailLevel        *ConflictDetailLevelTypeEnumEnum        `json:"conflictDetailLevel,omitempty"`
	ConflictResolutionStrategy *ConflictResolutionStrategyTypeEnumEnum `json:"conflictResolutionStrategy,omitempty"`
	DestinationCommitSpecifier string                                  `json:"destinationCommitSpecifier"`
	FilePaths                  []string                                `json:"filePaths,omitempty"`
	MaxConflictFiles           *int64                                  `json:"maxConflictFiles,omitempty"`
	MaxMergeHunks              *int64                                  `json:"maxMergeHunks,omitempty"`
	MergeOption                MergeOptionTypeEnumEnum                 `json:"mergeOption"`
	NextToken                  *string                                 `json:"nextToken,omitempty"`
	RepositoryName             string                                  `json:"repositoryName"`
	SourceCommitSpecifier      string                                  `json:"sourceCommitSpecifier"`
}
