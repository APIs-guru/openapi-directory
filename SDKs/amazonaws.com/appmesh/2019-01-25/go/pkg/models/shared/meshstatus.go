package shared

// MeshStatus
// An object that represents the status of a service mesh.
type MeshStatus struct {
	Status *MeshStatusCodeEnum `json:"status,omitempty"`
}
