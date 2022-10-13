package shared

import (
	"time"
)

type UserImportJobType struct {
	CloudWatchLogsRoleArn *string                      `json:"CloudWatchLogsRoleArn"`
	CompletionDate        *time.Time                   `json:"CompletionDate"`
	CompletionMessage     *string                      `json:"CompletionMessage"`
	CreationDate          *time.Time                   `json:"CreationDate"`
	FailedUsers           *int64                       `json:"FailedUsers"`
	ImportedUsers         *int64                       `json:"ImportedUsers"`
	JobID                 *string                      `json:"JobId"`
	JobName               *string                      `json:"JobName"`
	PreSignedURL          *string                      `json:"PreSignedUrl"`
	SkippedUsers          *int64                       `json:"SkippedUsers"`
	StartDate             *time.Time                   `json:"StartDate"`
	Status                *UserImportJobStatusTypeEnum `json:"Status"`
	UserPoolID            *string                      `json:"UserPoolId"`
}
