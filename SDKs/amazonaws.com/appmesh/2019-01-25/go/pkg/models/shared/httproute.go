package shared

// HTTPRoute
// An object that represents an HTTP or HTTP/2 route type.
type HTTPRoute struct {
	Action      HTTPRouteAction  `json:"action"`
	Match       HTTPRouteMatch   `json:"match"`
	RetryPolicy *HTTPRetryPolicy `json:"retryPolicy,omitempty"`
	Timeout     *HTTPTimeout     `json:"timeout,omitempty"`
}
