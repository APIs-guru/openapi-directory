package shared

// PullRequestCreatedEventMetadata
// Metadata about the pull request that is used when comparing the pull request source with its destination.
type PullRequestCreatedEventMetadata struct {
	DestinationCommitID *string `json:"destinationCommitId,omitempty"`
	MergeBase           *string `json:"mergeBase,omitempty"`
	RepositoryName      *string `json:"repositoryName,omitempty"`
	SourceCommitID      *string `json:"sourceCommitId,omitempty"`
}
