package shared

type ListDimensionsResponse struct {
	DimensionNames []string `json:"dimensionNames"`
	NextToken      *string  `json:"nextToken"`
}
