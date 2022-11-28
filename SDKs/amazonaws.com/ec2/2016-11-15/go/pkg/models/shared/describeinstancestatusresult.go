package shared

type DescribeInstanceStatusResult struct {
	InstanceStatuses []InstanceStatus
	NextToken        *string
}
