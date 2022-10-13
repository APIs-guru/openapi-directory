package shared

type ListSamplesResult struct {
	NextToken *string  `json:"nextToken"`
	Samples   []Sample `json:"samples"`
}
