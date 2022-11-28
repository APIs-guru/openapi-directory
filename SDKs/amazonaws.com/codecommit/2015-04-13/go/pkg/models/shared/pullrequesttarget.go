package shared

// PullRequestTarget
// Returns information about a pull request target.
type PullRequestTarget struct {
	DestinationCommit    *string        `json:"destinationCommit,omitempty"`
	DestinationReference *string        `json:"destinationReference,omitempty"`
	MergeBase            *string        `json:"mergeBase,omitempty"`
	MergeMetadata        *MergeMetadata `json:"mergeMetadata,omitempty"`
	RepositoryName       *string        `json:"repositoryName,omitempty"`
	SourceCommit         *string        `json:"sourceCommit,omitempty"`
	SourceReference      *string        `json:"sourceReference,omitempty"`
}
