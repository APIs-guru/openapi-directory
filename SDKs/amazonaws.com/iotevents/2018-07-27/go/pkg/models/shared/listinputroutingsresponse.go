package shared



type ListInputRoutingsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    RoutedResources []RoutedResource `json:"routedResources,omitempty"`
    
}

