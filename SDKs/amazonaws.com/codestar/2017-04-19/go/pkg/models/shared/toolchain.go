package shared

// Toolchain
// The toolchain template file provided with the project request. AWS CodeStar uses the template to provision the toolchain stack in AWS CloudFormation.
type Toolchain struct {
	RoleArn         *string           `json:"roleArn,omitempty"`
	Source          ToolchainSource   `json:"source"`
	StackParameters map[string]string `json:"stackParameters,omitempty"`
}
