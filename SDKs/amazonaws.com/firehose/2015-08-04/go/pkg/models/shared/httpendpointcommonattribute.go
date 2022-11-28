package shared

// HTTPEndpointCommonAttribute
// Describes the metadata that's delivered to the specified HTTP endpoint destination.
type HTTPEndpointCommonAttribute struct {
	AttributeName  string `json:"AttributeName"`
	AttributeValue string `json:"AttributeValue"`
}
