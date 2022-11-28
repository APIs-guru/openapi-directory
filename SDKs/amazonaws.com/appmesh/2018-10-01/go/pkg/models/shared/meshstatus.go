package shared

// MeshStatus
// An object representing the status of a service mesh.
type MeshStatus struct {
	Status *MeshStatusCodeEnum `json:"status,omitempty"`
}
