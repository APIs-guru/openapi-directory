package shared

import (
	"time"
)

type ProvisioningTemplateSummary struct {
	CreationDate     *time.Time `json:"creationDate"`
	Description      *string    `json:"description"`
	Enabled          *bool      `json:"enabled"`
	LastModifiedDate *time.Time `json:"lastModifiedDate"`
	TemplateArn      *string    `json:"templateArn"`
	TemplateName     *string    `json:"templateName"`
}
