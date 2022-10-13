package shared

import (
	"time"
)

type DescribeThingRegistrationTaskResponse struct {
	CreationDate       *time.Time  `json:"creationDate"`
	FailureCount       *int64      `json:"failureCount"`
	InputFileBucket    *string     `json:"inputFileBucket"`
	InputFileKey       *string     `json:"inputFileKey"`
	LastModifiedDate   *time.Time  `json:"lastModifiedDate"`
	Message            *string     `json:"message"`
	PercentageProgress *int64      `json:"percentageProgress"`
	RoleArn            *string     `json:"roleArn"`
	Status             *StatusEnum `json:"status"`
	SuccessCount       *int64      `json:"successCount"`
	TaskID             *string     `json:"taskId"`
	TemplateBody       *string     `json:"templateBody"`
}
