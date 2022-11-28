package shared

type DescribeVpcAttributeResult struct {
	EnableDNSHostnames *AttributeBooleanValue
	EnableDNSSupport   *AttributeBooleanValue
	VpcID              *string
}
