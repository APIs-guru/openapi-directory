package shared



type DescribeMergeConflictsInput struct {
    ConflictDetailLevel *ConflictDetailLevelTypeEnumEnum `json:"conflictDetailLevel,omitempty"`
    ConflictResolutionStrategy *ConflictResolutionStrategyTypeEnumEnum `json:"conflictResolutionStrategy,omitempty"`
    DestinationCommitSpecifier string `json:"destinationCommitSpecifier"`
    FilePath string `json:"filePath"`
    MaxMergeHunks *int64 `json:"maxMergeHunks,omitempty"`
    MergeOption MergeOptionTypeEnumEnum `json:"mergeOption"`
    NextToken *string `json:"nextToken,omitempty"`
    RepositoryName string `json:"repositoryName"`
    SourceCommitSpecifier string `json:"sourceCommitSpecifier"`
    
}

