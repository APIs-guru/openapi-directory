package shared



type MergePullRequestBySquashInput struct {
    AuthorName *string `json:"authorName,omitempty"`
    CommitMessage *string `json:"commitMessage,omitempty"`
    ConflictDetailLevel *ConflictDetailLevelTypeEnumEnum `json:"conflictDetailLevel,omitempty"`
    ConflictResolution *ConflictResolution `json:"conflictResolution,omitempty"`
    ConflictResolutionStrategy *ConflictResolutionStrategyTypeEnumEnum `json:"conflictResolutionStrategy,omitempty"`
    Email *string `json:"email,omitempty"`
    KeepEmptyFolders *bool `json:"keepEmptyFolders,omitempty"`
    PullRequestID string `json:"pullRequestId"`
    RepositoryName string `json:"repositoryName"`
    SourceCommitID *string `json:"sourceCommitId,omitempty"`
    
}

