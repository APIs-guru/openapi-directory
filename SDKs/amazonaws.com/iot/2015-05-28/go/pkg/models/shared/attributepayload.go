package shared

// AttributePayload
// The attribute payload.
type AttributePayload struct {
	Attributes map[string]string `json:"attributes,omitempty"`
	Merge      *bool             `json:"merge,omitempty"`
}
