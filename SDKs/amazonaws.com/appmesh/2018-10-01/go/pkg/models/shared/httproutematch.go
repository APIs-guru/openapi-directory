package shared

// HTTPRouteMatch
// An object representing the requirements for a route to match HTTP requests for a virtual
//
//	router.
type HTTPRouteMatch struct {
	Prefix *string `json:"prefix,omitempty"`
}
