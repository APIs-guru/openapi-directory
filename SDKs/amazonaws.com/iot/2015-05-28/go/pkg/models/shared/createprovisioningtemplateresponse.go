package shared

type CreateProvisioningTemplateResponse struct {
	DefaultVersionID *int64  `json:"defaultVersionId"`
	TemplateArn      *string `json:"templateArn"`
	TemplateName     *string `json:"templateName"`
}
