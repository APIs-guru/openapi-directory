package shared

type RouteData struct {
	MeshName          string            `json:"meshName"`
	Metadata          *ResourceMetadata `json:"metadata,omitempty"`
	RouteName         string            `json:"routeName"`
	Spec              *RouteSpec        `json:"spec,omitempty"`
	Status            *RouteStatus      `json:"status,omitempty"`
	VirtualRouterName string            `json:"virtualRouterName"`
}
