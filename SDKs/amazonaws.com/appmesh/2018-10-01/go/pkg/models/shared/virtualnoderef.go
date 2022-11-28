package shared

// VirtualNodeRef
// An object representing a virtual node returned by a list operation.
type VirtualNodeRef struct {
	Arn             *string `json:"arn,omitempty"`
	MeshName        *string `json:"meshName,omitempty"`
	VirtualNodeName *string `json:"virtualNodeName,omitempty"`
}
