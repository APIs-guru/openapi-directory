package shared

type AddAttributesActivity struct {
	Attributes map[string]string `json:"attributes"`
	Name       string            `json:"name"`
	Next       *string           `json:"next"`
}
