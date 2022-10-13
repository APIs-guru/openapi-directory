package shared

type ReportDefinition struct {
	AdditionalArtifacts      []AdditionalArtifactEnum `json:"AdditionalArtifacts"`
	AdditionalSchemaElements []SchemaElementEnum      `json:"AdditionalSchemaElements"`
	BillingViewArn           *string                  `json:"BillingViewArn"`
	Compression              CompressionFormatEnum    `json:"Compression"`
	Format                   ReportFormatEnum         `json:"Format"`
	RefreshClosedReports     *bool                    `json:"RefreshClosedReports"`
	ReportName               string                   `json:"ReportName"`
	ReportVersioning         *ReportVersioningEnum    `json:"ReportVersioning"`
	S3Bucket                 string                   `json:"S3Bucket"`
	S3Prefix                 string                   `json:"S3Prefix"`
	S3Region                 AwsRegionEnum            `json:"S3Region"`
	TimeUnit                 TimeUnitEnum             `json:"TimeUnit"`
}
