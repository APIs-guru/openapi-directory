package shared

// ImagePipeline
// Details of an image pipeline.
type ImagePipeline struct {
	Arn                            *string                  `json:"arn,omitempty"`
	ContainerRecipeArn             *string                  `json:"containerRecipeArn,omitempty"`
	DateCreated                    *string                  `json:"dateCreated,omitempty"`
	DateLastRun                    *string                  `json:"dateLastRun,omitempty"`
	DateNextRun                    *string                  `json:"dateNextRun,omitempty"`
	DateUpdated                    *string                  `json:"dateUpdated,omitempty"`
	Description                    *string                  `json:"description,omitempty"`
	DistributionConfigurationArn   *string                  `json:"distributionConfigurationArn,omitempty"`
	EnhancedImageMetadataEnabled   *bool                    `json:"enhancedImageMetadataEnabled,omitempty"`
	ImageRecipeArn                 *string                  `json:"imageRecipeArn,omitempty"`
	ImageTestsConfiguration        *ImageTestsConfiguration `json:"imageTestsConfiguration,omitempty"`
	InfrastructureConfigurationArn *string                  `json:"infrastructureConfigurationArn,omitempty"`
	Name                           *string                  `json:"name,omitempty"`
	Platform                       *PlatformEnum            `json:"platform,omitempty"`
	Schedule                       *Schedule                `json:"schedule,omitempty"`
	Status                         *PipelineStatusEnum      `json:"status,omitempty"`
	Tags                           map[string]string        `json:"tags,omitempty"`
}
