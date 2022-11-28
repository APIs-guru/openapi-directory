package shared

// DbClusterMember
// Contains information about an instance that is part of a cluster.
type DbClusterMember struct {
	DbClusterParameterGroupStatus *string
	DbInstanceIdentifier          *string
	IsClusterWriter               *bool
	PromotionTier                 *int64
}
