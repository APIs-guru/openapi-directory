package shared

// HTTPRouteHeader
// An object that represents the HTTP header in the request.
type HTTPRouteHeader struct {
	Invert *bool              `json:"invert,omitempty"`
	Match  *HeaderMatchMethod `json:"match,omitempty"`
	Name   string             `json:"name"`
}
