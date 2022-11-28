package shared

type ScalingActivityStatusCodeEnum string

const (
	ScalingActivityStatusCodeEnumPendingSpotBidPlacement         ScalingActivityStatusCodeEnum = "PendingSpotBidPlacement"
	ScalingActivityStatusCodeEnumWaitingForSpotInstanceRequestID ScalingActivityStatusCodeEnum = "WaitingForSpotInstanceRequestId"
	ScalingActivityStatusCodeEnumWaitingForSpotInstanceID        ScalingActivityStatusCodeEnum = "WaitingForSpotInstanceId"
	ScalingActivityStatusCodeEnumWaitingForInstanceID            ScalingActivityStatusCodeEnum = "WaitingForInstanceId"
	ScalingActivityStatusCodeEnumPreInService                    ScalingActivityStatusCodeEnum = "PreInService"
	ScalingActivityStatusCodeEnumInProgress                      ScalingActivityStatusCodeEnum = "InProgress"
	ScalingActivityStatusCodeEnumWaitingForElbConnectionDraining ScalingActivityStatusCodeEnum = "WaitingForELBConnectionDraining"
	ScalingActivityStatusCodeEnumMidLifecycleAction              ScalingActivityStatusCodeEnum = "MidLifecycleAction"
	ScalingActivityStatusCodeEnumWaitingForInstanceWarmup        ScalingActivityStatusCodeEnum = "WaitingForInstanceWarmup"
	ScalingActivityStatusCodeEnumSuccessful                      ScalingActivityStatusCodeEnum = "Successful"
	ScalingActivityStatusCodeEnumFailed                          ScalingActivityStatusCodeEnum = "Failed"
	ScalingActivityStatusCodeEnumCancelled                       ScalingActivityStatusCodeEnum = "Cancelled"
)
