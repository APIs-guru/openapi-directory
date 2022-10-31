package shared

import (
"time")

type DescribeProvisioningTemplateVersionResponse struct {
    CreationDate *time.Time `json:"creationDate,omitempty"`
    IsDefaultVersion *bool `json:"isDefaultVersion,omitempty"`
    TemplateBody *string `json:"templateBody,omitempty"`
    VersionID *int64 `json:"versionId,omitempty"`
    
}

