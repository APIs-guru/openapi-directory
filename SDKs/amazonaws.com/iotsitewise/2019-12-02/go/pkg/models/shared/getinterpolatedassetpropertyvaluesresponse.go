package shared

type GetInterpolatedAssetPropertyValuesResponse struct {
	InterpolatedAssetPropertyValues []InterpolatedAssetPropertyValue `json:"interpolatedAssetPropertyValues"`
	NextToken                       *string                          `json:"nextToken,omitempty"`
}
