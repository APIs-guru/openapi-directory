package shared

type LaunchTemplateSpecification struct {
	LaunchTemplateID   *string `json:"launchTemplateId"`
	LaunchTemplateName *string `json:"launchTemplateName"`
	Version            *string `json:"version"`
}
