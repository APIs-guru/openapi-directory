package shared

import (
	"time"
)

type ExportTableToPointInTimeInput struct {
	ClientToken    *string             `json:"ClientToken"`
	ExportFormat   *ExportFormatEnum   `json:"ExportFormat"`
	ExportTime     *time.Time          `json:"ExportTime"`
	S3Bucket       string              `json:"S3Bucket"`
	S3BucketOwner  *string             `json:"S3BucketOwner"`
	S3Prefix       *string             `json:"S3Prefix"`
	S3SseAlgorithm *S3SseAlgorithmEnum `json:"S3SseAlgorithm"`
	S3SseKmsKeyID  *string             `json:"S3SseKmsKeyId"`
	TableArn       string              `json:"TableArn"`
}
