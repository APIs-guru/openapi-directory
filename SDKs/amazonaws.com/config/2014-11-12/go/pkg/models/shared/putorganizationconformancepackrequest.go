package shared



type PutOrganizationConformancePackRequest struct {
    ConformancePackInputParameters []ConformancePackInputParameter `json:"ConformancePackInputParameters,omitempty"`
    DeliveryS3Bucket *string `json:"DeliveryS3Bucket,omitempty"`
    DeliveryS3KeyPrefix *string `json:"DeliveryS3KeyPrefix,omitempty"`
    ExcludedAccounts []string `json:"ExcludedAccounts,omitempty"`
    OrganizationConformancePackName string `json:"OrganizationConformancePackName"`
    TemplateBody *string `json:"TemplateBody,omitempty"`
    TemplateS3URI *string `json:"TemplateS3Uri,omitempty"`
    
}

