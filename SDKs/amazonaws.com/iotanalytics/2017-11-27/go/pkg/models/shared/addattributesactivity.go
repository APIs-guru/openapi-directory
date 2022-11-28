package shared

// AddAttributesActivity
// An activity that adds other attributes based on existing attributes in the message.
type AddAttributesActivity struct {
	Attributes map[string]string `json:"attributes"`
	Name       string            `json:"name"`
	Next       *string           `json:"next,omitempty"`
}
