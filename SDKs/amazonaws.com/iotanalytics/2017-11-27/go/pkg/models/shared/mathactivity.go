package shared

// MathActivity
// An activity that computes an arithmetic expression using the message's attributes.
type MathActivity struct {
	Attribute string  `json:"attribute"`
	Math      string  `json:"math"`
	Name      string  `json:"name"`
	Next      *string `json:"next,omitempty"`
}
