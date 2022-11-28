package shared

// DescribeScheduledInstancesResult
// Contains the output of DescribeScheduledInstances.
type DescribeScheduledInstancesResult struct {
	NextToken            *string
	ScheduledInstanceSet []ScheduledInstance
}
