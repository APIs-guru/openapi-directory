package shared

type GetCapacityReservationUsageResult struct {
	AvailableInstanceCount *int64
	CapacityReservationID  *string
	InstanceType           *string
	InstanceUsages         []InstanceUsage
	NextToken              *string
	State                  *CapacityReservationStateEnum
	TotalInstanceCount     *int64
}
