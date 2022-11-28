package shared

// DescribeInstancesOutput
// Represents the returned data in response to a request operation.
type DescribeInstancesOutput struct {
	Instances []Instance `json:"Instances,omitempty"`
	NextToken *string    `json:"NextToken,omitempty"`
}
