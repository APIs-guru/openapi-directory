package shared

// DescribeVpcEndpointServicesResult
// Contains the output of DescribeVpcEndpointServices.
type DescribeVpcEndpointServicesResult struct {
	NextToken      *string
	ServiceDetails []ServiceDetail
	ServiceNames   []string
}
