package shared

type CreateProvisioningTemplateVersionResponse struct {
	IsDefaultVersion *bool   `json:"isDefaultVersion,omitempty"`
	TemplateArn      *string `json:"templateArn,omitempty"`
	TemplateName     *string `json:"templateName,omitempty"`
	VersionID        *int64  `json:"versionId,omitempty"`
}
