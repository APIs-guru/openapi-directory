package shared

// Image
// An Image Builder image. You must specify exactly one recipe for the image – either a container recipe (<code>containerRecipe</code>), which creates a container image, or an image recipe (<code>imageRecipe</code>), which creates an AMI.
type Image struct {
	Arn                          *string                      `json:"arn,omitempty"`
	ContainerRecipe              *ContainerRecipe             `json:"containerRecipe,omitempty"`
	DateCreated                  *string                      `json:"dateCreated,omitempty"`
	DistributionConfiguration    *DistributionConfiguration   `json:"distributionConfiguration,omitempty"`
	EnhancedImageMetadataEnabled *bool                        `json:"enhancedImageMetadataEnabled,omitempty"`
	ImageRecipe                  *ImageRecipe                 `json:"imageRecipe,omitempty"`
	ImageTestsConfiguration      *ImageTestsConfiguration     `json:"imageTestsConfiguration,omitempty"`
	InfrastructureConfiguration  *InfrastructureConfiguration `json:"infrastructureConfiguration,omitempty"`
	Name                         *string                      `json:"name,omitempty"`
	OsVersion                    *string                      `json:"osVersion,omitempty"`
	OutputResources              *OutputResources             `json:"outputResources,omitempty"`
	Platform                     *PlatformEnum                `json:"platform,omitempty"`
	SourcePipelineArn            *string                      `json:"sourcePipelineArn,omitempty"`
	SourcePipelineName           *string                      `json:"sourcePipelineName,omitempty"`
	State                        *ImageState                  `json:"state,omitempty"`
	Tags                         map[string]string            `json:"tags,omitempty"`
	Type                         *ImageTypeEnum               `json:"type,omitempty"`
	Version                      *string                      `json:"version,omitempty"`
}
