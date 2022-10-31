package shared



type ListServerNeighborsResponse struct {
    KnownDependencyCount *int64 `json:"knownDependencyCount,omitempty"`
    Neighbors []NeighborConnectionDetail `json:"neighbors"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

