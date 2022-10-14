package shared

import (
	"time"
)

type ExportDescription struct {
	BilledSizeBytes *int64              `json:"BilledSizeBytes,omitempty"`
	ClientToken     *string             `json:"ClientToken,omitempty"`
	EndTime         *time.Time          `json:"EndTime,omitempty"`
	ExportArn       *string             `json:"ExportArn,omitempty"`
	ExportFormat    *ExportFormatEnum   `json:"ExportFormat,omitempty"`
	ExportManifest  *string             `json:"ExportManifest,omitempty"`
	ExportStatus    *ExportStatusEnum   `json:"ExportStatus,omitempty"`
	ExportTime      *time.Time          `json:"ExportTime,omitempty"`
	FailureCode     *string             `json:"FailureCode,omitempty"`
	FailureMessage  *string             `json:"FailureMessage,omitempty"`
	ItemCount       *int64              `json:"ItemCount,omitempty"`
	S3Bucket        *string             `json:"S3Bucket,omitempty"`
	S3BucketOwner   *string             `json:"S3BucketOwner,omitempty"`
	S3Prefix        *string             `json:"S3Prefix,omitempty"`
	S3SseAlgorithm  *S3SseAlgorithmEnum `json:"S3SseAlgorithm,omitempty"`
	S3SseKmsKeyID   *string             `json:"S3SseKmsKeyId,omitempty"`
	StartTime       *time.Time          `json:"StartTime,omitempty"`
	TableArn        *string             `json:"TableArn,omitempty"`
	TableID         *string             `json:"TableId,omitempty"`
}
