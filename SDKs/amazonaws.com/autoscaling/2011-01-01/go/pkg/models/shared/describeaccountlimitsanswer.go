package shared

type DescribeAccountLimitsAnswer struct {
	MaxNumberOfAutoScalingGroups    *int64
	MaxNumberOfLaunchConfigurations *int64
	NumberOfAutoScalingGroups       *int64
	NumberOfLaunchConfigurations    *int64
}
