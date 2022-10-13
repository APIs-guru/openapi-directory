package shared

type ReportExportConfig struct {
	ExportConfigType *ReportExportConfigTypeEnum `json:"exportConfigType"`
	S3Destination    *S3ReportExportConfig       `json:"s3Destination"`
}
