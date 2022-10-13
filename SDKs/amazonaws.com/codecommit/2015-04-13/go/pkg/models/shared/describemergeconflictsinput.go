package shared

type DescribeMergeConflictsInput struct {
	ConflictDetailLevel        *ConflictDetailLevelTypeEnumEnum        `json:"conflictDetailLevel"`
	ConflictResolutionStrategy *ConflictResolutionStrategyTypeEnumEnum `json:"conflictResolutionStrategy"`
	DestinationCommitSpecifier string                                  `json:"destinationCommitSpecifier"`
	FilePath                   string                                  `json:"filePath"`
	MaxMergeHunks              *int64                                  `json:"maxMergeHunks"`
	MergeOption                MergeOptionTypeEnumEnum                 `json:"mergeOption"`
	NextToken                  *string                                 `json:"nextToken"`
	RepositoryName             string                                  `json:"repositoryName"`
	SourceCommitSpecifier      string                                  `json:"sourceCommitSpecifier"`
}
