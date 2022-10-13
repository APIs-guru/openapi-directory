package shared

import (
	"time"
)

type DescribeProvisioningTemplateResponse struct {
	CreationDate        *time.Time        `json:"creationDate"`
	DefaultVersionID    *int64            `json:"defaultVersionId"`
	Description         *string           `json:"description"`
	Enabled             *bool             `json:"enabled"`
	LastModifiedDate    *time.Time        `json:"lastModifiedDate"`
	PreProvisioningHook *ProvisioningHook `json:"preProvisioningHook"`
	ProvisioningRoleArn *string           `json:"provisioningRoleArn"`
	TemplateArn         *string           `json:"templateArn"`
	TemplateBody        *string           `json:"templateBody"`
	TemplateName        *string           `json:"templateName"`
}
