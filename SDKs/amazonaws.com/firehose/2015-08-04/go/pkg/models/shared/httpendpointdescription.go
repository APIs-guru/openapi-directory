package shared

// HTTPEndpointDescription
// Describes the HTTP endpoint selected as the destination.
type HTTPEndpointDescription struct {
	Name *string `json:"Name,omitempty"`
	URL  *string `json:"Url,omitempty"`
}
