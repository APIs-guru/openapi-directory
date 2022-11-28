package shared

// SelectAttributesActivity
// Used to create a new message using only the specified attributes from the original message.
type SelectAttributesActivity struct {
	Attributes []string `json:"attributes"`
	Name       string   `json:"name"`
	Next       *string  `json:"next,omitempty"`
}
