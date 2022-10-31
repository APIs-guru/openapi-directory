package shared



type MeshData struct {
    MeshName string `json:"meshName"`
    Metadata ResourceMetadata `json:"metadata"`
    Status *MeshStatus `json:"status,omitempty"`
    
}

