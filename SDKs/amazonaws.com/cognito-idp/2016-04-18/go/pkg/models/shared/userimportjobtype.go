package shared

import (
	"time"
)

// UserImportJobType
// The user import job type.
type UserImportJobType struct {
	CloudWatchLogsRoleArn *string                      `json:"CloudWatchLogsRoleArn,omitempty"`
	CompletionDate        *time.Time                   `json:"CompletionDate,omitempty"`
	CompletionMessage     *string                      `json:"CompletionMessage,omitempty"`
	CreationDate          *time.Time                   `json:"CreationDate,omitempty"`
	FailedUsers           *int64                       `json:"FailedUsers,omitempty"`
	ImportedUsers         *int64                       `json:"ImportedUsers,omitempty"`
	JobID                 *string                      `json:"JobId,omitempty"`
	JobName               *string                      `json:"JobName,omitempty"`
	PreSignedURL          *string                      `json:"PreSignedUrl,omitempty"`
	SkippedUsers          *int64                       `json:"SkippedUsers,omitempty"`
	StartDate             *time.Time                   `json:"StartDate,omitempty"`
	Status                *UserImportJobStatusTypeEnum `json:"Status,omitempty"`
	UserPoolID            *string                      `json:"UserPoolId,omitempty"`
}
