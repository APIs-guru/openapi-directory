package shared

// Distribution
//
//	Defines the settings for a specific Region.
type Distribution struct {
	AmiDistributionConfiguration       *AmiDistributionConfiguration       `json:"amiDistributionConfiguration,omitempty"`
	ContainerDistributionConfiguration *ContainerDistributionConfiguration `json:"containerDistributionConfiguration,omitempty"`
	LaunchTemplateConfigurations       []LaunchTemplateConfiguration       `json:"launchTemplateConfigurations,omitempty"`
	LicenseConfigurationArns           []string                            `json:"licenseConfigurationArns,omitempty"`
	Region                             string                              `json:"region"`
}
