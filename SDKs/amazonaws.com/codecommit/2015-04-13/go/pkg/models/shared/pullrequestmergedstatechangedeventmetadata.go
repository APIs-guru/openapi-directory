package shared

// PullRequestMergedStateChangedEventMetadata
// Returns information about the change in the merge state for a pull request event.
type PullRequestMergedStateChangedEventMetadata struct {
	DestinationReference *string        `json:"destinationReference,omitempty"`
	MergeMetadata        *MergeMetadata `json:"mergeMetadata,omitempty"`
	RepositoryName       *string        `json:"repositoryName,omitempty"`
}
