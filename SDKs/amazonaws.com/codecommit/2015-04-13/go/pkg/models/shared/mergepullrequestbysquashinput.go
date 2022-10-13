package shared

type MergePullRequestBySquashInput struct {
	AuthorName                 *string                                 `json:"authorName"`
	CommitMessage              *string                                 `json:"commitMessage"`
	ConflictDetailLevel        *ConflictDetailLevelTypeEnumEnum        `json:"conflictDetailLevel"`
	ConflictResolution         *ConflictResolution                     `json:"conflictResolution"`
	ConflictResolutionStrategy *ConflictResolutionStrategyTypeEnumEnum `json:"conflictResolutionStrategy"`
	Email                      *string                                 `json:"email"`
	KeepEmptyFolders           *bool                                   `json:"keepEmptyFolders"`
	PullRequestID              string                                  `json:"pullRequestId"`
	RepositoryName             string                                  `json:"repositoryName"`
	SourceCommitID             *string                                 `json:"sourceCommitId"`
}
