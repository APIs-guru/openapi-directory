package shared

type BatchListObjectParentPathsResponse struct {
	NextToken                   *string                   `json:"NextToken"`
	PathToObjectIdentifiersList []PathToObjectIdentifiers `json:"PathToObjectIdentifiersList"`
}
