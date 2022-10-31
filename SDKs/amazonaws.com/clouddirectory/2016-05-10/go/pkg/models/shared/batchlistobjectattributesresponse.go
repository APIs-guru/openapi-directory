package shared

type BatchListObjectAttributesResponse struct {
	Attributes []AttributeKeyAndValue `json:"Attributes,omitempty"`
	NextToken  *string                `json:"NextToken,omitempty"`
}
