package shared

type IndexAttachment struct {
	IndexedAttributes []AttributeKeyAndValue `json:"IndexedAttributes"`
	ObjectIdentifier  *string                `json:"ObjectIdentifier"`
}
