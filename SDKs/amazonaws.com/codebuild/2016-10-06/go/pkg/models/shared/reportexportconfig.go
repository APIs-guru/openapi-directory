package shared

type ReportExportConfig struct {
	ExportConfigType *ReportExportConfigTypeEnum `json:"exportConfigType,omitempty"`
	S3Destination    *S3ReportExportConfig       `json:"s3Destination,omitempty"`
}
