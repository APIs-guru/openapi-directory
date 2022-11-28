package shared

type LaunchTemplateErrorCodeEnum string

const (
	LaunchTemplateErrorCodeEnumLaunchTemplateIDDoesNotExist      LaunchTemplateErrorCodeEnum = "launchTemplateIdDoesNotExist"
	LaunchTemplateErrorCodeEnumLaunchTemplateIDMalformed         LaunchTemplateErrorCodeEnum = "launchTemplateIdMalformed"
	LaunchTemplateErrorCodeEnumLaunchTemplateNameDoesNotExist    LaunchTemplateErrorCodeEnum = "launchTemplateNameDoesNotExist"
	LaunchTemplateErrorCodeEnumLaunchTemplateNameMalformed       LaunchTemplateErrorCodeEnum = "launchTemplateNameMalformed"
	LaunchTemplateErrorCodeEnumLaunchTemplateVersionDoesNotExist LaunchTemplateErrorCodeEnum = "launchTemplateVersionDoesNotExist"
	LaunchTemplateErrorCodeEnumUnexpectedError                   LaunchTemplateErrorCodeEnum = "unexpectedError"
)
