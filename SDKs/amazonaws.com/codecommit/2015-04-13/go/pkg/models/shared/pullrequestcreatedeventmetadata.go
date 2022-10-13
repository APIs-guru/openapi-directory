package shared

type PullRequestCreatedEventMetadata struct {
	DestinationCommitID *string `json:"destinationCommitId"`
	MergeBase           *string `json:"mergeBase"`
	RepositoryName      *string `json:"repositoryName"`
	SourceCommitID      *string `json:"sourceCommitId"`
}
