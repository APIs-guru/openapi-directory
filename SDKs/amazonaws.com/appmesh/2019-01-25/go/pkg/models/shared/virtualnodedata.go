package shared

// VirtualNodeData
// An object that represents a virtual node returned by a describe operation.
type VirtualNodeData struct {
	MeshName        string            `json:"meshName"`
	Metadata        ResourceMetadata  `json:"metadata"`
	Spec            VirtualNodeSpec   `json:"spec"`
	Status          VirtualNodeStatus `json:"status"`
	VirtualNodeName string            `json:"virtualNodeName"`
}
