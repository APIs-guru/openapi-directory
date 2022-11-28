package shared

type GetGroupsForCapacityReservationResult struct {
	CapacityReservationGroups []CapacityReservationGroup
	NextToken                 *string
}
