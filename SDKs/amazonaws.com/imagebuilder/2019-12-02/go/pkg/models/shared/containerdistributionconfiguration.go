package shared

type ContainerDistributionConfiguration struct {
	ContainerTags    []string                  `json:"containerTags"`
	Description      *string                   `json:"description"`
	TargetRepository TargetContainerRepository `json:"targetRepository"`
}
