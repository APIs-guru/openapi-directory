package shared

type ListObjectParentPathsResponse struct {
	NextToken                   *string                   `json:"NextToken"`
	PathToObjectIdentifiersList []PathToObjectIdentifiers `json:"PathToObjectIdentifiersList"`
}
