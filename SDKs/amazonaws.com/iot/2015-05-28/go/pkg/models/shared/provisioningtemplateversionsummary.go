package shared

import (
	"time"
)

// ProvisioningTemplateVersionSummary
// A summary of information about a fleet provision template version.
type ProvisioningTemplateVersionSummary struct {
	CreationDate     *time.Time `json:"creationDate,omitempty"`
	IsDefaultVersion *bool      `json:"isDefaultVersion,omitempty"`
	VersionID        *int64     `json:"versionId,omitempty"`
}
