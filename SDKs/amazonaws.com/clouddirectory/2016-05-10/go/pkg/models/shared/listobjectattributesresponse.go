package shared

type ListObjectAttributesResponse struct {
	Attributes []AttributeKeyAndValue `json:"Attributes,omitempty"`
	NextToken  *string                `json:"NextToken,omitempty"`
}
