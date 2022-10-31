package shared



type PutConformancePackRequest struct {
    ConformancePackInputParameters []ConformancePackInputParameter `json:"ConformancePackInputParameters,omitempty"`
    ConformancePackName string `json:"ConformancePackName"`
    DeliveryS3Bucket *string `json:"DeliveryS3Bucket,omitempty"`
    DeliveryS3KeyPrefix *string `json:"DeliveryS3KeyPrefix,omitempty"`
    TemplateBody *string `json:"TemplateBody,omitempty"`
    TemplateS3URI *string `json:"TemplateS3Uri,omitempty"`
    
}

