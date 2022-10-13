package shared

type PutConformancePackRequest struct {
	ConformancePackInputParameters []ConformancePackInputParameter `json:"ConformancePackInputParameters"`
	ConformancePackName            string                          `json:"ConformancePackName"`
	DeliveryS3Bucket               *string                         `json:"DeliveryS3Bucket"`
	DeliveryS3KeyPrefix            *string                         `json:"DeliveryS3KeyPrefix"`
	TemplateBody                   *string                         `json:"TemplateBody"`
	TemplateS3URI                  *string                         `json:"TemplateS3Uri"`
}
