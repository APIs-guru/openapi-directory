package shared

type MathActivity struct {
	Attribute string  `json:"attribute"`
	Math      string  `json:"math"`
	Name      string  `json:"name"`
	Next      *string `json:"next,omitempty"`
}
