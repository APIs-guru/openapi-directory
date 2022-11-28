package shared

// DescribeReservedInstancesOfferingsResult
// Contains the output of DescribeReservedInstancesOfferings.
type DescribeReservedInstancesOfferingsResult struct {
	NextToken                  *string
	ReservedInstancesOfferings []ReservedInstancesOffering
}
