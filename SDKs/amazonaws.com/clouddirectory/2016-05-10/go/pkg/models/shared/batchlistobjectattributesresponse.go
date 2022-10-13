package shared

type BatchListObjectAttributesResponse struct {
	Attributes []AttributeKeyAndValue `json:"Attributes"`
	NextToken  *string                `json:"NextToken"`
}
