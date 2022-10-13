package shared

type NodePropertyOverride struct {
	ContainerOverrides *ContainerOverrides `json:"containerOverrides"`
	TargetNodes        string              `json:"targetNodes"`
}
