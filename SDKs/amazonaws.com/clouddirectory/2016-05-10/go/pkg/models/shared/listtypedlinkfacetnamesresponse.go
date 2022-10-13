package shared

type ListTypedLinkFacetNamesResponse struct {
	FacetNames []string `json:"FacetNames"`
	NextToken  *string  `json:"NextToken"`
}
