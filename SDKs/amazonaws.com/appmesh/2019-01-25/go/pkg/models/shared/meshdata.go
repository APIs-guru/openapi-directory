package shared

type MeshData struct {
	MeshName string           `json:"meshName"`
	Metadata ResourceMetadata `json:"metadata"`
	Spec     MeshSpec         `json:"spec"`
	Status   MeshStatus       `json:"status"`
}
