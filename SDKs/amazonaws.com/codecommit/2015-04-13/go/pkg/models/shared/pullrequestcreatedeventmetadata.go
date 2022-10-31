package shared

type PullRequestCreatedEventMetadata struct {
	DestinationCommitID *string `json:"destinationCommitId,omitempty"`
	MergeBase           *string `json:"mergeBase,omitempty"`
	RepositoryName      *string `json:"repositoryName,omitempty"`
	SourceCommitID      *string `json:"sourceCommitId,omitempty"`
}
