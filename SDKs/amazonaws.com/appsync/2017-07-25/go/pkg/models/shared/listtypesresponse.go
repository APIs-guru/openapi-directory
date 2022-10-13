package shared

type ListTypesResponse struct {
	NextToken *string `json:"nextToken"`
	Types     []Type  `json:"types"`
}
