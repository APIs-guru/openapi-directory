package shared

// ResourceCollection
//
//	A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks.
type ResourceCollection struct {
	CloudFormation *CloudFormationCollection `json:"CloudFormation,omitempty"`
}
