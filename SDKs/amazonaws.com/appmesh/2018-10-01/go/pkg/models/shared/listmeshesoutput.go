package shared

type ListMeshesOutput struct {
	Meshes    []MeshRef `json:"meshes"`
	NextToken *string   `json:"nextToken,omitempty"`
}
