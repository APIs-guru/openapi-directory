package shared

// ReportDefinition
// The definition of AWS Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition.
type ReportDefinition struct {
	AdditionalArtifacts      []AdditionalArtifactEnum `json:"AdditionalArtifacts,omitempty"`
	AdditionalSchemaElements []SchemaElementEnum      `json:"AdditionalSchemaElements"`
	BillingViewArn           *string                  `json:"BillingViewArn,omitempty"`
	Compression              CompressionFormatEnum    `json:"Compression"`
	Format                   ReportFormatEnum         `json:"Format"`
	RefreshClosedReports     *bool                    `json:"RefreshClosedReports,omitempty"`
	ReportName               string                   `json:"ReportName"`
	ReportVersioning         *ReportVersioningEnum    `json:"ReportVersioning,omitempty"`
	S3Bucket                 string                   `json:"S3Bucket"`
	S3Prefix                 string                   `json:"S3Prefix"`
	S3Region                 AwsRegionEnum            `json:"S3Region"`
	TimeUnit                 TimeUnitEnum             `json:"TimeUnit"`
}
