package shared

type ListDimensionsResponse struct {
	DimensionNames []string `json:"dimensionNames,omitempty"`
	NextToken      *string  `json:"nextToken,omitempty"`
}
