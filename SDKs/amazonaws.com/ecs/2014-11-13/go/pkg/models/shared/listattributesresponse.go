package shared

type ListAttributesResponse struct {
	Attributes []Attribute `json:"attributes"`
	NextToken  *string     `json:"nextToken"`
}
