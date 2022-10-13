package shared

type VirtualNodeRef struct {
	Arn             *string `json:"arn"`
	MeshName        *string `json:"meshName"`
	VirtualNodeName *string `json:"virtualNodeName"`
}
