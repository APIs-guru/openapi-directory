package shared

type KeyValuesPair struct {
	Name   *string  `json:"name,omitempty"`
	Values []string `json:"values,omitempty"`
}
