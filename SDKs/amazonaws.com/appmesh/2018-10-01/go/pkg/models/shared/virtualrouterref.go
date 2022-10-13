package shared

type VirtualRouterRef struct {
	Arn               *string `json:"arn"`
	MeshName          *string `json:"meshName"`
	VirtualRouterName *string `json:"virtualRouterName"`
}
