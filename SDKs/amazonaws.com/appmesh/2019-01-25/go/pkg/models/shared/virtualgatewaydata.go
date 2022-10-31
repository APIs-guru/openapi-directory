package shared



type VirtualGatewayData struct {
    MeshName string `json:"meshName"`
    Metadata ResourceMetadata `json:"metadata"`
    Spec VirtualGatewaySpec `json:"spec"`
    Status VirtualGatewayStatus `json:"status"`
    VirtualGatewayName string `json:"virtualGatewayName"`
    
}

