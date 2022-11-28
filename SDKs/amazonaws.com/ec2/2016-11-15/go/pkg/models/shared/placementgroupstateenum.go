package shared

type PlacementGroupStateEnum string

const (
	PlacementGroupStateEnumPending   PlacementGroupStateEnum = "pending"
	PlacementGroupStateEnumAvailable PlacementGroupStateEnum = "available"
	PlacementGroupStateEnumDeleting  PlacementGroupStateEnum = "deleting"
	PlacementGroupStateEnumDeleted   PlacementGroupStateEnum = "deleted"
)
