package shared

// Target
// Returns information about a target for a pull request.
type Target struct {
	DestinationReference *string `json:"destinationReference,omitempty"`
	RepositoryName       string  `json:"repositoryName"`
	SourceReference      string  `json:"sourceReference"`
}
