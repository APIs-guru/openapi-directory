package shared

// MeshData
// An object representing a service mesh returned by a describe operation.
type MeshData struct {
	MeshName string           `json:"meshName"`
	Metadata ResourceMetadata `json:"metadata"`
	Status   *MeshStatus      `json:"status,omitempty"`
}
