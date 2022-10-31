package shared

type SelectAttributesActivity struct {
	Attributes []string `json:"attributes"`
	Name       string   `json:"name"`
	Next       *string  `json:"next,omitempty"`
}
