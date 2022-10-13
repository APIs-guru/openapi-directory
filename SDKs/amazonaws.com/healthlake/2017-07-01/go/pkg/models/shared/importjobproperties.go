package shared

import (
	"time"
)

type ImportJobProperties struct {
	DataAccessRoleArn   *string           `json:"DataAccessRoleArn"`
	DatastoreID         string            `json:"DatastoreId"`
	EndTime             *time.Time        `json:"EndTime"`
	InputDataConfig     InputDataConfig   `json:"InputDataConfig"`
	JobID               string            `json:"JobId"`
	JobName             *string           `json:"JobName"`
	JobOutputDataConfig *OutputDataConfig `json:"JobOutputDataConfig"`
	JobStatus           JobStatusEnum     `json:"JobStatus"`
	Message             *string           `json:"Message"`
	SubmitTime          time.Time         `json:"SubmitTime"`
}
