package shared

// RouteData
// An object that represents a route returned by a describe operation.
type RouteData struct {
	MeshName          string           `json:"meshName"`
	Metadata          ResourceMetadata `json:"metadata"`
	RouteName         string           `json:"routeName"`
	Spec              RouteSpec        `json:"spec"`
	Status            RouteStatus      `json:"status"`
	VirtualRouterName string           `json:"virtualRouterName"`
}
