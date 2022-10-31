package shared



type IndexAttachment struct {
    IndexedAttributes []AttributeKeyAndValue `json:"IndexedAttributes,omitempty"`
    ObjectIdentifier *string `json:"ObjectIdentifier,omitempty"`
    
}

