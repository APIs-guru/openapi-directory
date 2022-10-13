package shared

type VirtualNodeData struct {
	MeshName        string             `json:"meshName"`
	Metadata        *ResourceMetadata  `json:"metadata"`
	Spec            *VirtualNodeSpec   `json:"spec"`
	Status          *VirtualNodeStatus `json:"status"`
	VirtualNodeName string             `json:"virtualNodeName"`
}
