package shared

type DescribeHostReservationOfferingsResult struct {
	NextToken   *string
	OfferingSet []HostOffering
}
