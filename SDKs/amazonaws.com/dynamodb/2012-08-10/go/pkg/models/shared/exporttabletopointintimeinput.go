package shared

import (
	"time"
)

type ExportTableToPointInTimeInput struct {
	ClientToken    *string             `json:"ClientToken,omitempty"`
	ExportFormat   *ExportFormatEnum   `json:"ExportFormat,omitempty"`
	ExportTime     *time.Time          `json:"ExportTime,omitempty"`
	S3Bucket       string              `json:"S3Bucket"`
	S3BucketOwner  *string             `json:"S3BucketOwner,omitempty"`
	S3Prefix       *string             `json:"S3Prefix,omitempty"`
	S3SseAlgorithm *S3SseAlgorithmEnum `json:"S3SseAlgorithm,omitempty"`
	S3SseKmsKeyID  *string             `json:"S3SseKmsKeyId,omitempty"`
	TableArn       string              `json:"TableArn"`
}
