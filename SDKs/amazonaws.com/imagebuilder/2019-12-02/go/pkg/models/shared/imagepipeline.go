package shared

type ImagePipeline struct {
	Arn                            *string                  `json:"arn"`
	ContainerRecipeArn             *string                  `json:"containerRecipeArn"`
	DateCreated                    *string                  `json:"dateCreated"`
	DateLastRun                    *string                  `json:"dateLastRun"`
	DateNextRun                    *string                  `json:"dateNextRun"`
	DateUpdated                    *string                  `json:"dateUpdated"`
	Description                    *string                  `json:"description"`
	DistributionConfigurationArn   *string                  `json:"distributionConfigurationArn"`
	EnhancedImageMetadataEnabled   *bool                    `json:"enhancedImageMetadataEnabled"`
	ImageRecipeArn                 *string                  `json:"imageRecipeArn"`
	ImageTestsConfiguration        *ImageTestsConfiguration `json:"imageTestsConfiguration"`
	InfrastructureConfigurationArn *string                  `json:"infrastructureConfigurationArn"`
	Name                           *string                  `json:"name"`
	Platform                       *PlatformEnum            `json:"platform"`
	Schedule                       *Schedule                `json:"schedule"`
	Status                         *PipelineStatusEnum      `json:"status"`
	Tags                           map[string]string        `json:"tags"`
}
