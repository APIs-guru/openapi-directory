package shared

import (
	"time"
)

type ExportDescription struct {
	BilledSizeBytes *int64              `json:"BilledSizeBytes"`
	ClientToken     *string             `json:"ClientToken"`
	EndTime         *time.Time          `json:"EndTime"`
	ExportArn       *string             `json:"ExportArn"`
	ExportFormat    *ExportFormatEnum   `json:"ExportFormat"`
	ExportManifest  *string             `json:"ExportManifest"`
	ExportStatus    *ExportStatusEnum   `json:"ExportStatus"`
	ExportTime      *time.Time          `json:"ExportTime"`
	FailureCode     *string             `json:"FailureCode"`
	FailureMessage  *string             `json:"FailureMessage"`
	ItemCount       *int64              `json:"ItemCount"`
	S3Bucket        *string             `json:"S3Bucket"`
	S3BucketOwner   *string             `json:"S3BucketOwner"`
	S3Prefix        *string             `json:"S3Prefix"`
	S3SseAlgorithm  *S3SseAlgorithmEnum `json:"S3SseAlgorithm"`
	S3SseKmsKeyID   *string             `json:"S3SseKmsKeyId"`
	StartTime       *time.Time          `json:"StartTime"`
	TableArn        *string             `json:"TableArn"`
	TableID         *string             `json:"TableId"`
}
