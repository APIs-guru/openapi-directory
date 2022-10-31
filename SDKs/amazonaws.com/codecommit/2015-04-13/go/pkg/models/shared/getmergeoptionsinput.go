package shared



type GetMergeOptionsInput struct {
    ConflictDetailLevel *ConflictDetailLevelTypeEnumEnum `json:"conflictDetailLevel,omitempty"`
    ConflictResolutionStrategy *ConflictResolutionStrategyTypeEnumEnum `json:"conflictResolutionStrategy,omitempty"`
    DestinationCommitSpecifier string `json:"destinationCommitSpecifier"`
    RepositoryName string `json:"repositoryName"`
    SourceCommitSpecifier string `json:"sourceCommitSpecifier"`
    
}

