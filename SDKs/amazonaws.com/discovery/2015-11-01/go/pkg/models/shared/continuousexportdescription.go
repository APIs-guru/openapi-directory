package shared

import (
	"time"
)

// ContinuousExportDescription
// A list of continuous export descriptions.
type ContinuousExportDescription struct {
	DataSource          *DataSourceEnum             `json:"dataSource,omitempty"`
	ExportID            *string                     `json:"exportId,omitempty"`
	S3Bucket            *string                     `json:"s3Bucket,omitempty"`
	SchemaStorageConfig map[string]string           `json:"schemaStorageConfig,omitempty"`
	StartTime           *time.Time                  `json:"startTime,omitempty"`
	Status              *ContinuousExportStatusEnum `json:"status,omitempty"`
	StatusDetail        *string                     `json:"statusDetail,omitempty"`
	StopTime            *time.Time                  `json:"stopTime,omitempty"`
}
