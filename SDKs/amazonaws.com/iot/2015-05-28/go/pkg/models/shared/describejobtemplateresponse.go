package shared

import (
"time")

type DescribeJobTemplateResponse struct {
    AbortConfig *AbortConfig `json:"abortConfig,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    Description *string `json:"description,omitempty"`
    Document *string `json:"document,omitempty"`
    DocumentSource *string `json:"documentSource,omitempty"`
    JobExecutionsRolloutConfig *JobExecutionsRolloutConfig `json:"jobExecutionsRolloutConfig,omitempty"`
    JobTemplateArn *string `json:"jobTemplateArn,omitempty"`
    JobTemplateID *string `json:"jobTemplateId,omitempty"`
    PresignedURLConfig *PresignedURLConfig `json:"presignedUrlConfig,omitempty"`
    TimeoutConfig *TimeoutConfig `json:"timeoutConfig,omitempty"`
    
}

