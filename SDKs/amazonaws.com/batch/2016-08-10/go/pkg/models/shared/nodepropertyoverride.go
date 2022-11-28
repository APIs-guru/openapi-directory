package shared

// NodePropertyOverride
// Object representing any node overrides to a job definition that's used in a <a>SubmitJob</a> API operation.
type NodePropertyOverride struct {
	ContainerOverrides *ContainerOverrides `json:"containerOverrides,omitempty"`
	TargetNodes        string              `json:"targetNodes"`
}
