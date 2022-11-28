package shared

// MeshRef
// An object representing a service mesh returned by a list operation.
type MeshRef struct {
	Arn      *string `json:"arn,omitempty"`
	MeshName *string `json:"meshName,omitempty"`
}
