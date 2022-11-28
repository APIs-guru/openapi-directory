package shared

// CloudFormationHealth
//
//	Information about the health of AWS resources in your account that are specified by an AWS CloudFormation stack.
type CloudFormationHealth struct {
	Insight   *InsightHealth `json:"Insight,omitempty"`
	StackName *string        `json:"StackName,omitempty"`
}
