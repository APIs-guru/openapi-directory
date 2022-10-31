package shared

type CreateUnreferencedMergeCommitInput struct {
	AuthorName                 *string                                 `json:"authorName,omitempty"`
	CommitMessage              *string                                 `json:"commitMessage,omitempty"`
	ConflictDetailLevel        *ConflictDetailLevelTypeEnumEnum        `json:"conflictDetailLevel,omitempty"`
	ConflictResolution         *ConflictResolution                     `json:"conflictResolution,omitempty"`
	ConflictResolutionStrategy *ConflictResolutionStrategyTypeEnumEnum `json:"conflictResolutionStrategy,omitempty"`
	DestinationCommitSpecifier string                                  `json:"destinationCommitSpecifier"`
	Email                      *string                                 `json:"email,omitempty"`
	KeepEmptyFolders           *bool                                   `json:"keepEmptyFolders,omitempty"`
	MergeOption                MergeOptionTypeEnumEnum                 `json:"mergeOption"`
	RepositoryName             string                                  `json:"repositoryName"`
	SourceCommitSpecifier      string                                  `json:"sourceCommitSpecifier"`
}
