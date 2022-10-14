package shared

import (
	"time"
)

type ImportJobProperties struct {
	DataAccessRoleArn   *string           `json:"DataAccessRoleArn,omitempty"`
	DatastoreID         string            `json:"DatastoreId"`
	EndTime             *time.Time        `json:"EndTime,omitempty"`
	InputDataConfig     InputDataConfig   `json:"InputDataConfig"`
	JobID               string            `json:"JobId"`
	JobName             *string           `json:"JobName,omitempty"`
	JobOutputDataConfig *OutputDataConfig `json:"JobOutputDataConfig,omitempty"`
	JobStatus           JobStatusEnum     `json:"JobStatus"`
	Message             *string           `json:"Message,omitempty"`
	SubmitTime          time.Time         `json:"SubmitTime"`
}
