package shared

type Toolchain struct {
	RoleArn         *string           `json:"roleArn"`
	Source          ToolchainSource   `json:"source"`
	StackParameters map[string]string `json:"stackParameters"`
}
