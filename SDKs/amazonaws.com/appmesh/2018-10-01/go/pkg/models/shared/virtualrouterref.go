package shared

// VirtualRouterRef
// An object representing a virtual router returned by a list operation.
type VirtualRouterRef struct {
	Arn               *string `json:"arn,omitempty"`
	MeshName          *string `json:"meshName,omitempty"`
	VirtualRouterName *string `json:"virtualRouterName,omitempty"`
}
