package shared

type GetMergeConflictsInput struct {
	ConflictDetailLevel        *ConflictDetailLevelTypeEnumEnum        `json:"conflictDetailLevel"`
	ConflictResolutionStrategy *ConflictResolutionStrategyTypeEnumEnum `json:"conflictResolutionStrategy"`
	DestinationCommitSpecifier string                                  `json:"destinationCommitSpecifier"`
	MaxConflictFiles           *int64                                  `json:"maxConflictFiles"`
	MergeOption                MergeOptionTypeEnumEnum                 `json:"mergeOption"`
	NextToken                  *string                                 `json:"nextToken"`
	RepositoryName             string                                  `json:"repositoryName"`
	SourceCommitSpecifier      string                                  `json:"sourceCommitSpecifier"`
}
