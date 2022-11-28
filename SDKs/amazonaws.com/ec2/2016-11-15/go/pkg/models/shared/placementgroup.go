package shared

// PlacementGroup
// Describes a placement group.
type PlacementGroup struct {
	GroupID        *string
	GroupName      *string
	PartitionCount *int64
	State          *PlacementGroupStateEnum
	Strategy       *PlacementStrategyEnum
	Tags           []Tag
}
