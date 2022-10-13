package shared

type CreateUnreferencedMergeCommitInput struct {
	AuthorName                 *string                                 `json:"authorName"`
	CommitMessage              *string                                 `json:"commitMessage"`
	ConflictDetailLevel        *ConflictDetailLevelTypeEnumEnum        `json:"conflictDetailLevel"`
	ConflictResolution         *ConflictResolution                     `json:"conflictResolution"`
	ConflictResolutionStrategy *ConflictResolutionStrategyTypeEnumEnum `json:"conflictResolutionStrategy"`
	DestinationCommitSpecifier string                                  `json:"destinationCommitSpecifier"`
	Email                      *string                                 `json:"email"`
	KeepEmptyFolders           *bool                                   `json:"keepEmptyFolders"`
	MergeOption                MergeOptionTypeEnumEnum                 `json:"mergeOption"`
	RepositoryName             string                                  `json:"repositoryName"`
	SourceCommitSpecifier      string                                  `json:"sourceCommitSpecifier"`
}
