package shared



type CreateProvisioningTemplateResponse struct {
    DefaultVersionID *int64 `json:"defaultVersionId,omitempty"`
    TemplateArn *string `json:"templateArn,omitempty"`
    TemplateName *string `json:"templateName,omitempty"`
    
}

