package shared

type ListFacetAttributesResponse struct {
	Attributes []FacetAttribute `json:"Attributes"`
	NextToken  *string          `json:"NextToken"`
}
