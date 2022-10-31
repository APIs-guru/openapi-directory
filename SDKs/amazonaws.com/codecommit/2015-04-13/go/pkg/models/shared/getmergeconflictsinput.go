package shared



type GetMergeConflictsInput struct {
    ConflictDetailLevel *ConflictDetailLevelTypeEnumEnum `json:"conflictDetailLevel,omitempty"`
    ConflictResolutionStrategy *ConflictResolutionStrategyTypeEnumEnum `json:"conflictResolutionStrategy,omitempty"`
    DestinationCommitSpecifier string `json:"destinationCommitSpecifier"`
    MaxConflictFiles *int64 `json:"maxConflictFiles,omitempty"`
    MergeOption MergeOptionTypeEnumEnum `json:"mergeOption"`
    NextToken *string `json:"nextToken,omitempty"`
    RepositoryName string `json:"repositoryName"`
    SourceCommitSpecifier string `json:"sourceCommitSpecifier"`
    
}

