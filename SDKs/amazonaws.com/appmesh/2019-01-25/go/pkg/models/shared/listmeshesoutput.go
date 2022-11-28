package shared

// ListMeshesOutput
// <zonbook></zonbook><xhtml></xhtml>
type ListMeshesOutput struct {
	Meshes    []MeshRef `json:"meshes"`
	NextToken *string   `json:"nextToken,omitempty"`
}
