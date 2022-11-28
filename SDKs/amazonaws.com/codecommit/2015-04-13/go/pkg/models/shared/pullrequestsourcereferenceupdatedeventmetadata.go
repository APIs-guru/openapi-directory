package shared

// PullRequestSourceReferenceUpdatedEventMetadata
// Information about an update to the source branch of a pull request.
type PullRequestSourceReferenceUpdatedEventMetadata struct {
	AfterCommitID  *string `json:"afterCommitId,omitempty"`
	BeforeCommitID *string `json:"beforeCommitId,omitempty"`
	MergeBase      *string `json:"mergeBase,omitempty"`
	RepositoryName *string `json:"repositoryName,omitempty"`
}
