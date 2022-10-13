package shared

type PullRequestSourceReferenceUpdatedEventMetadata struct {
	AfterCommitID  *string `json:"afterCommitId"`
	BeforeCommitID *string `json:"beforeCommitId"`
	MergeBase      *string `json:"mergeBase"`
	RepositoryName *string `json:"repositoryName"`
}
