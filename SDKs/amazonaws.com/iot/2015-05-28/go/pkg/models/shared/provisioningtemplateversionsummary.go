package shared

import (
	"time"
)

type ProvisioningTemplateVersionSummary struct {
	CreationDate     *time.Time `json:"creationDate"`
	IsDefaultVersion *bool      `json:"isDefaultVersion"`
	VersionID        *int64     `json:"versionId"`
}
