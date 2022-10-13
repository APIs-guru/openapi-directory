package shared

type RemoveAttributesActivity struct {
	Attributes []string `json:"attributes"`
	Name       string   `json:"name"`
	Next       *string  `json:"next"`
}
