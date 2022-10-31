package shared

import (
"time")

type DescribeProvisioningTemplateResponse struct {
    CreationDate *time.Time `json:"creationDate,omitempty"`
    DefaultVersionID *int64 `json:"defaultVersionId,omitempty"`
    Description *string `json:"description,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    LastModifiedDate *time.Time `json:"lastModifiedDate,omitempty"`
    PreProvisioningHook *ProvisioningHook `json:"preProvisioningHook,omitempty"`
    ProvisioningRoleArn *string `json:"provisioningRoleArn,omitempty"`
    TemplateArn *string `json:"templateArn,omitempty"`
    TemplateBody *string `json:"templateBody,omitempty"`
    TemplateName *string `json:"templateName,omitempty"`
    
}

