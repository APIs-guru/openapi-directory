package shared

type CreateProvisioningTemplateVersionResponse struct {
	IsDefaultVersion *bool   `json:"isDefaultVersion"`
	TemplateArn      *string `json:"templateArn"`
	TemplateName     *string `json:"templateName"`
	VersionID        *int64  `json:"versionId"`
}
