package shared

import (
	"time"
)

type EventsDetectionJobProperties struct {
	DataAccessRoleArn *string           `json:"DataAccessRoleArn"`
	EndTime           *time.Time        `json:"EndTime"`
	InputDataConfig   *InputDataConfig  `json:"InputDataConfig"`
	JobArn            *string           `json:"JobArn"`
	JobID             *string           `json:"JobId"`
	JobName           *string           `json:"JobName"`
	JobStatus         *JobStatusEnum    `json:"JobStatus"`
	LanguageCode      *LanguageCodeEnum `json:"LanguageCode"`
	Message           *string           `json:"Message"`
	OutputDataConfig  *OutputDataConfig `json:"OutputDataConfig"`
	SubmitTime        *time.Time        `json:"SubmitTime"`
	TargetEventTypes  []string          `json:"TargetEventTypes"`
}
