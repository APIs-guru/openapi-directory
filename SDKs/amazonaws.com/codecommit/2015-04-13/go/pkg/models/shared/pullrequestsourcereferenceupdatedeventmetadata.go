package shared



type PullRequestSourceReferenceUpdatedEventMetadata struct {
    AfterCommitID *string `json:"afterCommitId,omitempty"`
    BeforeCommitID *string `json:"beforeCommitId,omitempty"`
    MergeBase *string `json:"mergeBase,omitempty"`
    RepositoryName *string `json:"repositoryName,omitempty"`
    
}

