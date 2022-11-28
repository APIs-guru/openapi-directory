package shared

type DescribeHostReservationsResult struct {
	HostReservationSet []HostReservation
	NextToken          *string
}
