package shared

import (
	"time"
)

type DescribeJobTemplateResponse struct {
	AbortConfig                *AbortConfig                `json:"abortConfig"`
	CreatedAt                  *time.Time                  `json:"createdAt"`
	Description                *string                     `json:"description"`
	Document                   *string                     `json:"document"`
	DocumentSource             *string                     `json:"documentSource"`
	JobExecutionsRolloutConfig *JobExecutionsRolloutConfig `json:"jobExecutionsRolloutConfig"`
	JobTemplateArn             *string                     `json:"jobTemplateArn"`
	JobTemplateID              *string                     `json:"jobTemplateId"`
	PresignedURLConfig         *PresignedURLConfig         `json:"presignedUrlConfig"`
	TimeoutConfig              *TimeoutConfig              `json:"timeoutConfig"`
}
