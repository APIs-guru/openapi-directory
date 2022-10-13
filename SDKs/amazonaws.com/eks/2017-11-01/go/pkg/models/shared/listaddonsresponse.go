package shared

type ListAddonsResponse struct {
	Addons    []string `json:"addons"`
	NextToken *string  `json:"nextToken"`
}
