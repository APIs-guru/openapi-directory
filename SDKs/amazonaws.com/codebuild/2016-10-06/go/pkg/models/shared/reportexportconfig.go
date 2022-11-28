package shared

// ReportExportConfig
//
//	Information about the location where the run of a report is exported.
type ReportExportConfig struct {
	ExportConfigType *ReportExportConfigTypeEnum `json:"exportConfigType,omitempty"`
	S3Destination    *S3ReportExportConfig       `json:"s3Destination,omitempty"`
}
