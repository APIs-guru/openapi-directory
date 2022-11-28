package shared

import (
	"time"
)

// ConfigurationSettingsDescription
// Describes the settings for a configuration set.
type ConfigurationSettingsDescription struct {
	ApplicationName   *string
	DateCreated       *time.Time
	DateUpdated       *time.Time
	DeploymentStatus  *ConfigurationDeploymentStatusEnum
	Description       *string
	EnvironmentName   *string
	OptionSettings    []ConfigurationOptionSetting
	PlatformArn       *string
	SolutionStackName *string
	TemplateName      *string
}
