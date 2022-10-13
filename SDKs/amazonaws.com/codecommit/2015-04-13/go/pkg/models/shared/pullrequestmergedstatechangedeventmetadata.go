package shared

type PullRequestMergedStateChangedEventMetadata struct {
	DestinationReference *string        `json:"destinationReference"`
	MergeMetadata        *MergeMetadata `json:"mergeMetadata"`
	RepositoryName       *string        `json:"repositoryName"`
}
