package shared

// AdditionalInstanceConfiguration
// In addition to your infrastruction configuration, these settings provide an extra layer of control over your build instances. For instances where Image Builder installs the SSM agent, you can choose whether to keep it for the AMI that you create. You can also specify commands to run on launch for all of your build instances.
type AdditionalInstanceConfiguration struct {
	SystemsManagerAgent *SystemsManagerAgent `json:"systemsManagerAgent,omitempty"`
	UserDataOverride    *string              `json:"userDataOverride,omitempty"`
}
