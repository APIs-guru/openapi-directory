package shared

// BatchListObjectAttributesResponse
// Represents the output of a <a>ListObjectAttributes</a> response operation.
type BatchListObjectAttributesResponse struct {
	Attributes []AttributeKeyAndValue `json:"Attributes,omitempty"`
	NextToken  *string                `json:"NextToken,omitempty"`
}
