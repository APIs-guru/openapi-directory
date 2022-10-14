package shared

type LambdaLinuxProcessParams struct {
	ContainerParams *LambdaContainerParams   `json:"containerParams,omitempty"`
	IsolationMode   *LambdaIsolationModeEnum `json:"isolationMode,omitempty"`
}
