package shared

type ListInputRoutingsResponse struct {
	NextToken       *string          `json:"nextToken"`
	RoutedResources []RoutedResource `json:"routedResources"`
}
