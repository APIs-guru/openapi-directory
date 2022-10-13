package shared

type TagFilter struct {
	Key    *string  `json:"Key"`
	Values []string `json:"Values"`
}
