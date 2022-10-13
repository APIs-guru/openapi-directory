package shared

import (
	"time"
)

type JobTemplateSummary struct {
	CreatedAt      *time.Time `json:"createdAt"`
	Description    *string    `json:"description"`
	JobTemplateArn *string    `json:"jobTemplateArn"`
	JobTemplateID  *string    `json:"jobTemplateId"`
}
