package shared

// IndexAttachment
// Represents an index and an attached object.
type IndexAttachment struct {
	IndexedAttributes []AttributeKeyAndValue `json:"IndexedAttributes,omitempty"`
	ObjectIdentifier  *string                `json:"ObjectIdentifier,omitempty"`
}
