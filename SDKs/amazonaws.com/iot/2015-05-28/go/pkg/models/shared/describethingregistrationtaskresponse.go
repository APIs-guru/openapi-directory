package shared

import (
	"time"
)

type DescribeThingRegistrationTaskResponse struct {
	CreationDate       *time.Time  `json:"creationDate,omitempty"`
	FailureCount       *int64      `json:"failureCount,omitempty"`
	InputFileBucket    *string     `json:"inputFileBucket,omitempty"`
	InputFileKey       *string     `json:"inputFileKey,omitempty"`
	LastModifiedDate   *time.Time  `json:"lastModifiedDate,omitempty"`
	Message            *string     `json:"message,omitempty"`
	PercentageProgress *int64      `json:"percentageProgress,omitempty"`
	RoleArn            *string     `json:"roleArn,omitempty"`
	Status             *StatusEnum `json:"status,omitempty"`
	SuccessCount       *int64      `json:"successCount,omitempty"`
	TaskID             *string     `json:"taskId,omitempty"`
	TemplateBody       *string     `json:"templateBody,omitempty"`
}
