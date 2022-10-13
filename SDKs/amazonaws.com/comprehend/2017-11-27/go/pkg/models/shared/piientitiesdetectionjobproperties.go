package shared

import (
	"time"
)

type PiiEntitiesDetectionJobProperties struct {
	DataAccessRoleArn *string                       `json:"DataAccessRoleArn"`
	EndTime           *time.Time                    `json:"EndTime"`
	InputDataConfig   *InputDataConfig              `json:"InputDataConfig"`
	JobArn            *string                       `json:"JobArn"`
	JobID             *string                       `json:"JobId"`
	JobName           *string                       `json:"JobName"`
	JobStatus         *JobStatusEnum                `json:"JobStatus"`
	LanguageCode      *LanguageCodeEnum             `json:"LanguageCode"`
	Message           *string                       `json:"Message"`
	Mode              *PiiEntitiesDetectionModeEnum `json:"Mode"`
	OutputDataConfig  *PiiOutputDataConfig          `json:"OutputDataConfig"`
	RedactionConfig   *RedactionConfig              `json:"RedactionConfig"`
	SubmitTime        *time.Time                    `json:"SubmitTime"`
}
