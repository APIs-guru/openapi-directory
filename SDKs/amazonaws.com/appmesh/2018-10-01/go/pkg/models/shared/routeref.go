package shared

// RouteRef
// An object representing a route returned by a list operation.
type RouteRef struct {
	Arn               *string `json:"arn,omitempty"`
	MeshName          *string `json:"meshName,omitempty"`
	RouteName         *string `json:"routeName,omitempty"`
	VirtualRouterName *string `json:"virtualRouterName,omitempty"`
}
