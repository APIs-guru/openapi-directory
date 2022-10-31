package shared

import (
	"time"
)

type EventsDetectionJobProperties struct {
	DataAccessRoleArn *string           `json:"DataAccessRoleArn,omitempty"`
	EndTime           *time.Time        `json:"EndTime,omitempty"`
	InputDataConfig   *InputDataConfig  `json:"InputDataConfig,omitempty"`
	JobArn            *string           `json:"JobArn,omitempty"`
	JobID             *string           `json:"JobId,omitempty"`
	JobName           *string           `json:"JobName,omitempty"`
	JobStatus         *JobStatusEnum    `json:"JobStatus,omitempty"`
	LanguageCode      *LanguageCodeEnum `json:"LanguageCode,omitempty"`
	Message           *string           `json:"Message,omitempty"`
	OutputDataConfig  *OutputDataConfig `json:"OutputDataConfig,omitempty"`
	SubmitTime        *time.Time        `json:"SubmitTime,omitempty"`
	TargetEventTypes  []string          `json:"TargetEventTypes,omitempty"`
}
