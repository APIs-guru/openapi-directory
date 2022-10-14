package shared

type VirtualNodeData struct {
	MeshName        string             `json:"meshName"`
	Metadata        *ResourceMetadata  `json:"metadata,omitempty"`
	Spec            *VirtualNodeSpec   `json:"spec,omitempty"`
	Status          *VirtualNodeStatus `json:"status,omitempty"`
	VirtualNodeName string             `json:"virtualNodeName"`
}
