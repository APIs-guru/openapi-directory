package shared

// GlobalClusterMember
// A data structure with information about any primary and secondary clusters associated with an Amazon DocumentDB global clusters.
type GlobalClusterMember struct {
	DbClusterArn *string
	IsWriter     *bool
	Readers      []string
}
