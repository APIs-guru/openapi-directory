package shared

// MeshSpec
// An object that represents the specification of a service mesh.
type MeshSpec struct {
	EgressFilter *EgressFilter `json:"egressFilter,omitempty"`
}
