package shared

type ListProvisioningTemplateVersionsResponse struct {
	NextToken *string                              `json:"nextToken"`
	Versions  []ProvisioningTemplateVersionSummary `json:"versions"`
}
