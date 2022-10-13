package shared

type PutOrganizationConformancePackRequest struct {
	ConformancePackInputParameters  []ConformancePackInputParameter `json:"ConformancePackInputParameters"`
	DeliveryS3Bucket                *string                         `json:"DeliveryS3Bucket"`
	DeliveryS3KeyPrefix             *string                         `json:"DeliveryS3KeyPrefix"`
	ExcludedAccounts                []string                        `json:"ExcludedAccounts"`
	OrganizationConformancePackName string                          `json:"OrganizationConformancePackName"`
	TemplateBody                    *string                         `json:"TemplateBody"`
	TemplateS3URI                   *string                         `json:"TemplateS3Uri"`
}
