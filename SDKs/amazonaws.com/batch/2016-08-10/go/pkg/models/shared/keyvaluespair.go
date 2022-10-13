package shared

type KeyValuesPair struct {
	Name   *string  `json:"name"`
	Values []string `json:"values"`
}
