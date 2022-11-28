package shared

import (
	"time"
)

// JobTemplateSummary
// An object that contains information about the job template.
type JobTemplateSummary struct {
	CreatedAt      *time.Time `json:"createdAt,omitempty"`
	Description    *string    `json:"description,omitempty"`
	JobTemplateArn *string    `json:"jobTemplateArn,omitempty"`
	JobTemplateID  *string    `json:"jobTemplateId,omitempty"`
}
