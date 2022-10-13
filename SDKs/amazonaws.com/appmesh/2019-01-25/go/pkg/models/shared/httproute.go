package shared

type HTTPRoute struct {
	Action      HTTPRouteAction  `json:"action"`
	Match       HTTPRouteMatch   `json:"match"`
	RetryPolicy *HTTPRetryPolicy `json:"retryPolicy"`
	Timeout     *HTTPTimeout     `json:"timeout"`
}
