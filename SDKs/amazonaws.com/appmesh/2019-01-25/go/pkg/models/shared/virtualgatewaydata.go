package shared

// VirtualGatewayData
// An object that represents a virtual gateway returned by a describe operation.
type VirtualGatewayData struct {
	MeshName           string               `json:"meshName"`
	Metadata           ResourceMetadata     `json:"metadata"`
	Spec               VirtualGatewaySpec   `json:"spec"`
	Status             VirtualGatewayStatus `json:"status"`
	VirtualGatewayName string               `json:"virtualGatewayName"`
}
