package shared

type ListProvisioningTemplatesResponse struct {
	NextToken *string                       `json:"nextToken,omitempty"`
	Templates []ProvisioningTemplateSummary `json:"templates,omitempty"`
}
