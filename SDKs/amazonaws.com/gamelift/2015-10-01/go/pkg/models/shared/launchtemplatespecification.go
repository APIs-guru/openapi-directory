package shared

type LaunchTemplateSpecification struct {
	LaunchTemplateID   *string `json:"LaunchTemplateId"`
	LaunchTemplateName *string `json:"LaunchTemplateName"`
	Version            *string `json:"Version"`
}
