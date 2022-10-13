package shared

type Distribution struct {
	AmiDistributionConfiguration       *AmiDistributionConfiguration       `json:"amiDistributionConfiguration"`
	ContainerDistributionConfiguration *ContainerDistributionConfiguration `json:"containerDistributionConfiguration"`
	LaunchTemplateConfigurations       []LaunchTemplateConfiguration       `json:"launchTemplateConfigurations"`
	LicenseConfigurationArns           []string                            `json:"licenseConfigurationArns"`
	Region                             string                              `json:"region"`
}
