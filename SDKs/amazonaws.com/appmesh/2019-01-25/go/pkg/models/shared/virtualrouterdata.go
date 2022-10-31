package shared

type VirtualRouterData struct {
	MeshName          string              `json:"meshName"`
	Metadata          ResourceMetadata    `json:"metadata"`
	Spec              VirtualRouterSpec   `json:"spec"`
	Status            VirtualRouterStatus `json:"status"`
	VirtualRouterName string              `json:"virtualRouterName"`
}
