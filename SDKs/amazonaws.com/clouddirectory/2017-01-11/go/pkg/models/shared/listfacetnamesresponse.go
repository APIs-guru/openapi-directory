package shared

type ListFacetNamesResponse struct {
	FacetNames []string `json:"FacetNames"`
	NextToken  *string  `json:"NextToken"`
}
