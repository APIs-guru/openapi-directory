package shared

// VirtualNodeData
// An object representing a virtual node returned by a describe operation.
type VirtualNodeData struct {
	MeshName        string             `json:"meshName"`
	Metadata        *ResourceMetadata  `json:"metadata,omitempty"`
	Spec            *VirtualNodeSpec   `json:"spec,omitempty"`
	Status          *VirtualNodeStatus `json:"status,omitempty"`
	VirtualNodeName string             `json:"virtualNodeName"`
}
