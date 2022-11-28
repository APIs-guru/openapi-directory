package shared

type DescribeInstanceTypesResult struct {
	InstanceTypes []InstanceTypeInfo
	NextToken     *string
}
