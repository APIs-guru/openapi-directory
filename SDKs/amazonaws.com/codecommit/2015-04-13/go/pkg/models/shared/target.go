package shared

type Target struct {
	DestinationReference *string `json:"destinationReference,omitempty"`
	RepositoryName       string  `json:"repositoryName"`
	SourceReference      string  `json:"sourceReference"`
}
