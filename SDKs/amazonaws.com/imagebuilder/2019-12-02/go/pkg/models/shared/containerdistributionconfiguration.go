package shared

// ContainerDistributionConfiguration
// Container distribution settings for encryption, licensing, and sharing in a specific Region.
type ContainerDistributionConfiguration struct {
	ContainerTags    []string                  `json:"containerTags,omitempty"`
	Description      *string                   `json:"description,omitempty"`
	TargetRepository TargetContainerRepository `json:"targetRepository"`
}
