package shared

type LaunchTemplateSpecification struct {
	LaunchTemplateID   *string `json:"launchTemplateId,omitempty"`
	LaunchTemplateName *string `json:"launchTemplateName,omitempty"`
	Version            *string `json:"version,omitempty"`
}
