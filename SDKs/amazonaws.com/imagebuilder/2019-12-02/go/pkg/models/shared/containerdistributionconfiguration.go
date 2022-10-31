package shared



type ContainerDistributionConfiguration struct {
    ContainerTags []string `json:"containerTags,omitempty"`
    Description *string `json:"description,omitempty"`
    TargetRepository TargetContainerRepository `json:"targetRepository"`
    
}

