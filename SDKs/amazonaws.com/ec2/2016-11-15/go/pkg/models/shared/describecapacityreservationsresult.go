package shared

type DescribeCapacityReservationsResult struct {
	CapacityReservations []CapacityReservation
	NextToken            *string
}
