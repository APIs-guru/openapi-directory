package shared

type DeregisterContainerInstanceRequest struct {
	Cluster           *string `json:"cluster"`
	ContainerInstance string  `json:"containerInstance"`
	Force             *bool   `json:"force"`
}
