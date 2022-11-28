package shared

// BatchListObjectParentPathsResponse
// Represents the output of a <a>ListObjectParentPaths</a> response operation.
type BatchListObjectParentPathsResponse struct {
	NextToken                   *string                   `json:"NextToken,omitempty"`
	PathToObjectIdentifiersList []PathToObjectIdentifiers `json:"PathToObjectIdentifiersList,omitempty"`
}
