package shared

import (
"time")

type ProvisioningTemplateSummary struct {
    CreationDate *time.Time `json:"creationDate,omitempty"`
    Description *string `json:"description,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    LastModifiedDate *time.Time `json:"lastModifiedDate,omitempty"`
    TemplateArn *string `json:"templateArn,omitempty"`
    TemplateName *string `json:"templateName,omitempty"`
    
}

