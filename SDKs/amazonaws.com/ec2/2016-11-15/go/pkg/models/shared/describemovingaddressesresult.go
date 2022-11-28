package shared

type DescribeMovingAddressesResult struct {
	MovingAddressStatuses []MovingAddressStatus
	NextToken             *string
}
