package shared

type PullRequestTarget struct {
	DestinationCommit    *string        `json:"destinationCommit"`
	DestinationReference *string        `json:"destinationReference"`
	MergeBase            *string        `json:"mergeBase"`
	MergeMetadata        *MergeMetadata `json:"mergeMetadata"`
	RepositoryName       *string        `json:"repositoryName"`
	SourceCommit         *string        `json:"sourceCommit"`
	SourceReference      *string        `json:"sourceReference"`
}
