package shared

type RouteRef struct {
	Arn               *string `json:"arn"`
	MeshName          *string `json:"meshName"`
	RouteName         *string `json:"routeName"`
	VirtualRouterName *string `json:"virtualRouterName"`
}
