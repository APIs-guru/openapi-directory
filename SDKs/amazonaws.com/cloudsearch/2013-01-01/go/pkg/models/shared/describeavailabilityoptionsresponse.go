package shared

// DescribeAvailabilityOptionsResponse
// The result of a <code>DescribeAvailabilityOptions</code> request. Indicates whether or not the Multi-AZ option is enabled for the domain specified in the request.
type DescribeAvailabilityOptionsResponse struct {
	AvailabilityOptions *AvailabilityOptionsStatus
}
