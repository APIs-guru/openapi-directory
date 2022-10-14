package shared

import (
	"time"
)

type JobTemplateSummary struct {
	CreatedAt      *time.Time `json:"createdAt,omitempty"`
	Description    *string    `json:"description,omitempty"`
	JobTemplateArn *string    `json:"jobTemplateArn,omitempty"`
	JobTemplateID  *string    `json:"jobTemplateId,omitempty"`
}
