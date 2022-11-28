package shared

// LambdaLinuxProcessParams
// Contains parameters for a Linux process that contains an Lambda function.
type LambdaLinuxProcessParams struct {
	ContainerParams *LambdaContainerParams   `json:"containerParams,omitempty"`
	IsolationMode   *LambdaIsolationModeEnum `json:"isolationMode,omitempty"`
}
