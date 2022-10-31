package shared

type ListAttributesResponse struct {
	Attributes []Attribute `json:"attributes,omitempty"`
	NextToken  *string     `json:"nextToken,omitempty"`
}
