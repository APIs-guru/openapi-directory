package shared

type HTTPRouteHeader struct {
	Invert *bool              `json:"invert,omitempty"`
	Match  *HeaderMatchMethod `json:"match,omitempty"`
	Name   string             `json:"name"`
}
