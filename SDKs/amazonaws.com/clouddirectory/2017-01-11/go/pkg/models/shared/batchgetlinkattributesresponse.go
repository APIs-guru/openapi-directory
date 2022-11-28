package shared

// BatchGetLinkAttributesResponse
// Represents the output of a <a>GetLinkAttributes</a> response operation.
type BatchGetLinkAttributesResponse struct {
	Attributes []AttributeKeyAndValue `json:"Attributes,omitempty"`
}
