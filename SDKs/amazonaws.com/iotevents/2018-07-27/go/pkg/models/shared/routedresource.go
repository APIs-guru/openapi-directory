package shared

// RoutedResource
//
//	Contains information about the routed resource.
type RoutedResource struct {
	Arn  *string `json:"arn,omitempty"`
	Name *string `json:"name,omitempty"`
}
