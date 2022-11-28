package shared

// FilterActivity
// An activity that filters a message based on its attributes.
type FilterActivity struct {
	Filter string  `json:"filter"`
	Name   string  `json:"name"`
	Next   *string `json:"next,omitempty"`
}
