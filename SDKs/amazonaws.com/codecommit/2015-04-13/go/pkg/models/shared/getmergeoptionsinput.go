package shared

type GetMergeOptionsInput struct {
	ConflictDetailLevel        *ConflictDetailLevelTypeEnumEnum        `json:"conflictDetailLevel"`
	ConflictResolutionStrategy *ConflictResolutionStrategyTypeEnumEnum `json:"conflictResolutionStrategy"`
	DestinationCommitSpecifier string                                  `json:"destinationCommitSpecifier"`
	RepositoryName             string                                  `json:"repositoryName"`
	SourceCommitSpecifier      string                                  `json:"sourceCommitSpecifier"`
}
