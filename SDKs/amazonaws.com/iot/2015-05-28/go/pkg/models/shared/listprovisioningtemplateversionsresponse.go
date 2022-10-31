package shared



type ListProvisioningTemplateVersionsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    Versions []ProvisioningTemplateVersionSummary `json:"versions,omitempty"`
    
}

