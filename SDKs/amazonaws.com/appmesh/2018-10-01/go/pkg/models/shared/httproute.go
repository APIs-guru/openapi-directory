package shared

type HTTPRoute struct {
	Action *HTTPRouteAction `json:"action,omitempty"`
	Match  *HTTPRouteMatch  `json:"match,omitempty"`
}
