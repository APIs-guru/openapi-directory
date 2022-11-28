package shared

// RemoveAttributesActivity
// An activity that removes attributes from a message.
type RemoveAttributesActivity struct {
	Attributes []string `json:"attributes"`
	Name       string   `json:"name"`
	Next       *string  `json:"next,omitempty"`
}
