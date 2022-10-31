package shared

type NodePropertyOverride struct {
	ContainerOverrides *ContainerOverrides `json:"containerOverrides,omitempty"`
	TargetNodes        string              `json:"targetNodes"`
}
