package shared



type GatewayRouteData struct {
    GatewayRouteName string `json:"gatewayRouteName"`
    MeshName string `json:"meshName"`
    Metadata ResourceMetadata `json:"metadata"`
    Spec GatewayRouteSpec `json:"spec"`
    Status GatewayRouteStatus `json:"status"`
    VirtualGatewayName string `json:"virtualGatewayName"`
    
}

