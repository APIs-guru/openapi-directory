package shared

type Image struct {
	Arn                          *string                      `json:"arn"`
	ContainerRecipe              *ContainerRecipe             `json:"containerRecipe"`
	DateCreated                  *string                      `json:"dateCreated"`
	DistributionConfiguration    *DistributionConfiguration   `json:"distributionConfiguration"`
	EnhancedImageMetadataEnabled *bool                        `json:"enhancedImageMetadataEnabled"`
	ImageRecipe                  *ImageRecipe                 `json:"imageRecipe"`
	ImageTestsConfiguration      *ImageTestsConfiguration     `json:"imageTestsConfiguration"`
	InfrastructureConfiguration  *InfrastructureConfiguration `json:"infrastructureConfiguration"`
	Name                         *string                      `json:"name"`
	OsVersion                    *string                      `json:"osVersion"`
	OutputResources              *OutputResources             `json:"outputResources"`
	Platform                     *PlatformEnum                `json:"platform"`
	SourcePipelineArn            *string                      `json:"sourcePipelineArn"`
	SourcePipelineName           *string                      `json:"sourcePipelineName"`
	State                        *ImageState                  `json:"state"`
	Tags                         map[string]string            `json:"tags"`
	Type                         *ImageTypeEnum               `json:"type"`
	Version                      *string                      `json:"version"`
}
