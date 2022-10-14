package shared

type VirtualNodeRef struct {
	Arn             *string `json:"arn,omitempty"`
	MeshName        *string `json:"meshName,omitempty"`
	VirtualNodeName *string `json:"virtualNodeName,omitempty"`
}
