package shared

// ContainerInfo
// The information about the container used for a job run or a managed endpoint.
type ContainerInfo struct {
	EksInfo *EksInfo `json:"eksInfo,omitempty"`
}
