package shared

import (
	"time"
)

// StoreImageTaskResult
// The information about the AMI store task, including the progress of the task.
type StoreImageTaskResult struct {
	AmiID                  *string
	Bucket                 *string
	ProgressPercentage     *int64
	S3objectKey            *string
	StoreTaskFailureReason *string
	StoreTaskState         *string
	TaskStartTime          *time.Time
}
