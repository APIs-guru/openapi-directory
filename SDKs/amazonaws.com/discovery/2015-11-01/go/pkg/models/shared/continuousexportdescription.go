package shared

import (
	"time"
)

type ContinuousExportDescription struct {
	DataSource          *DataSourceEnum             `json:"dataSource"`
	ExportID            *string                     `json:"exportId"`
	S3Bucket            *string                     `json:"s3Bucket"`
	SchemaStorageConfig map[string]string           `json:"schemaStorageConfig"`
	StartTime           *time.Time                  `json:"startTime"`
	Status              *ContinuousExportStatusEnum `json:"status"`
	StatusDetail        *string                     `json:"statusDetail"`
	StopTime            *time.Time                  `json:"stopTime"`
}
