package shared

import (
"time")

type ProvisioningTemplateVersionSummary struct {
    CreationDate *time.Time `json:"creationDate,omitempty"`
    IsDefaultVersion *bool `json:"isDefaultVersion,omitempty"`
    VersionID *int64 `json:"versionId,omitempty"`
    
}

