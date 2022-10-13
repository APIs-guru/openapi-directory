package shared

type AttributePayload struct {
	Attributes map[string]string `json:"attributes"`
	Merge      *bool             `json:"merge"`
}
