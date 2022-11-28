package shared

// DescribeReservedInstancesModificationsResult
// Contains the output of DescribeReservedInstancesModifications.
type DescribeReservedInstancesModificationsResult struct {
	NextToken                      *string
	ReservedInstancesModifications []ReservedInstancesModification
}
