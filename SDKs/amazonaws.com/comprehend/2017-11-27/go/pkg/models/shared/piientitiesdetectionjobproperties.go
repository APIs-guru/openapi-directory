package shared

import (
	"time"
)

// PiiEntitiesDetectionJobProperties
// Provides information about a PII entities detection job.
type PiiEntitiesDetectionJobProperties struct {
	DataAccessRoleArn *string                       `json:"DataAccessRoleArn,omitempty"`
	EndTime           *time.Time                    `json:"EndTime,omitempty"`
	InputDataConfig   *InputDataConfig              `json:"InputDataConfig,omitempty"`
	JobArn            *string                       `json:"JobArn,omitempty"`
	JobID             *string                       `json:"JobId,omitempty"`
	JobName           *string                       `json:"JobName,omitempty"`
	JobStatus         *JobStatusEnum                `json:"JobStatus,omitempty"`
	LanguageCode      *LanguageCodeEnum             `json:"LanguageCode,omitempty"`
	Message           *string                       `json:"Message,omitempty"`
	Mode              *PiiEntitiesDetectionModeEnum `json:"Mode,omitempty"`
	OutputDataConfig  *PiiOutputDataConfig          `json:"OutputDataConfig,omitempty"`
	RedactionConfig   *RedactionConfig              `json:"RedactionConfig,omitempty"`
	SubmitTime        *time.Time                    `json:"SubmitTime,omitempty"`
}
