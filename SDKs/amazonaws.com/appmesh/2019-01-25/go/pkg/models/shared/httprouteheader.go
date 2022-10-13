package shared

type HTTPRouteHeader struct {
	Invert *bool              `json:"invert"`
	Match  *HeaderMatchMethod `json:"match"`
	Name   string             `json:"name"`
}
