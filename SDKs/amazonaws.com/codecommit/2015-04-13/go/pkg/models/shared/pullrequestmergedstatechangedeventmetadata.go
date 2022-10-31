package shared



type PullRequestMergedStateChangedEventMetadata struct {
    DestinationReference *string `json:"destinationReference,omitempty"`
    MergeMetadata *MergeMetadata `json:"mergeMetadata,omitempty"`
    RepositoryName *string `json:"repositoryName,omitempty"`
    
}

