package shared

type ListObjectAttributesResponse struct {
	Attributes []AttributeKeyAndValue `json:"Attributes"`
	NextToken  *string                `json:"NextToken"`
}
