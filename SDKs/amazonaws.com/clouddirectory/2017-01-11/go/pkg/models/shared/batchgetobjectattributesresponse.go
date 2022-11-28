package shared

// BatchGetObjectAttributesResponse
// Represents the output of a <a>GetObjectAttributes</a> response operation.
type BatchGetObjectAttributesResponse struct {
	Attributes []AttributeKeyAndValue `json:"Attributes,omitempty"`
}
