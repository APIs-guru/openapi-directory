package shared

import (
	"time"
)

type DescribeProvisioningTemplateVersionResponse struct {
	CreationDate     *time.Time `json:"creationDate"`
	IsDefaultVersion *bool      `json:"isDefaultVersion"`
	TemplateBody     *string    `json:"templateBody"`
	VersionID        *int64     `json:"versionId"`
}
