package shared

type DescribeInstancesResult struct {
	NextToken    *string
	Reservations []Reservation
}
