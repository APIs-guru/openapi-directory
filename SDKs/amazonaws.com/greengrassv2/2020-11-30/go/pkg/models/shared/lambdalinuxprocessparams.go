package shared

type LambdaLinuxProcessParams struct {
	ContainerParams *LambdaContainerParams   `json:"containerParams"`
	IsolationMode   *LambdaIsolationModeEnum `json:"isolationMode"`
}
