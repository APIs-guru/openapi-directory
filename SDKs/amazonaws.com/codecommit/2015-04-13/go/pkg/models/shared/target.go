package shared

type Target struct {
	DestinationReference *string `json:"destinationReference"`
	RepositoryName       string  `json:"repositoryName"`
	SourceReference      string  `json:"sourceReference"`
}
