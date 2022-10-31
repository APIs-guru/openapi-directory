package shared



type RouteRef struct {
    Arn *string `json:"arn,omitempty"`
    MeshName *string `json:"meshName,omitempty"`
    RouteName *string `json:"routeName,omitempty"`
    VirtualRouterName *string `json:"virtualRouterName,omitempty"`
    
}

