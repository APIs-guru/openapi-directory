package shared

type ListServerNeighborsResponse struct {
	KnownDependencyCount *int64                     `json:"knownDependencyCount"`
	Neighbors            []NeighborConnectionDetail `json:"neighbors"`
	NextToken            *string                    `json:"nextToken"`
}
