package shared

// MeshData
// An object that represents a service mesh returned by a describe operation.
type MeshData struct {
	MeshName string           `json:"meshName"`
	Metadata ResourceMetadata `json:"metadata"`
	Spec     MeshSpec         `json:"spec"`
	Status   MeshStatus       `json:"status"`
}
