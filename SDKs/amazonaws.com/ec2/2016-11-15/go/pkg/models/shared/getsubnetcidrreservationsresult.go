package shared

type GetSubnetCidrReservationsResult struct {
	NextToken                  *string
	SubnetIpv4CidrReservations []SubnetCidrReservation
	SubnetIpv6CidrReservations []SubnetCidrReservation
}
