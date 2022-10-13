package shared

type ListProvisioningTemplatesResponse struct {
	NextToken *string                       `json:"nextToken"`
	Templates []ProvisioningTemplateSummary `json:"templates"`
}
