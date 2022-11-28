package shared

// ConfigurationOptionsDescription
// Describes the settings for a specified configuration set.
type ConfigurationOptionsDescription struct {
	Options           []ConfigurationOptionDescription
	PlatformArn       *string
	SolutionStackName *string
}
