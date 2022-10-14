package shared

type BatchListObjectParentPathsResponse struct {
	NextToken                   *string                   `json:"NextToken,omitempty"`
	PathToObjectIdentifiersList []PathToObjectIdentifiers `json:"PathToObjectIdentifiersList,omitempty"`
}
