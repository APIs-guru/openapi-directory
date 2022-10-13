package shared

type MergeBranchesBySquashInput struct {
	AuthorName                 *string                                 `json:"authorName"`
	CommitMessage              *string                                 `json:"commitMessage"`
	ConflictDetailLevel        *ConflictDetailLevelTypeEnumEnum        `json:"conflictDetailLevel"`
	ConflictResolution         *ConflictResolution                     `json:"conflictResolution"`
	ConflictResolutionStrategy *ConflictResolutionStrategyTypeEnumEnum `json:"conflictResolutionStrategy"`
	DestinationCommitSpecifier string                                  `json:"destinationCommitSpecifier"`
	Email                      *string                                 `json:"email"`
	KeepEmptyFolders           *bool                                   `json:"keepEmptyFolders"`
	RepositoryName             string                                  `json:"repositoryName"`
	SourceCommitSpecifier      string                                  `json:"sourceCommitSpecifier"`
	TargetBranch               *string                                 `json:"targetBranch"`
}
