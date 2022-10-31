package shared

import (
"time")

type Job struct {
    AbortConfig *AbortConfig `json:"abortConfig,omitempty"`
    Comment *string `json:"comment,omitempty"`
    CompletedAt *time.Time `json:"completedAt,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    Description *string `json:"description,omitempty"`
    ForceCanceled *bool `json:"forceCanceled,omitempty"`
    JobArn *string `json:"jobArn,omitempty"`
    JobExecutionsRolloutConfig *JobExecutionsRolloutConfig `json:"jobExecutionsRolloutConfig,omitempty"`
    JobID *string `json:"jobId,omitempty"`
    JobProcessDetails *JobProcessDetails `json:"jobProcessDetails,omitempty"`
    JobTemplateArn *string `json:"jobTemplateArn,omitempty"`
    LastUpdatedAt *time.Time `json:"lastUpdatedAt,omitempty"`
    NamespaceID *string `json:"namespaceId,omitempty"`
    PresignedURLConfig *PresignedURLConfig `json:"presignedUrlConfig,omitempty"`
    ReasonCode *string `json:"reasonCode,omitempty"`
    Status *JobStatusEnum `json:"status,omitempty"`
    TargetSelection *TargetSelectionEnum `json:"targetSelection,omitempty"`
    Targets []string `json:"targets,omitempty"`
    TimeoutConfig *TimeoutConfig `json:"timeoutConfig,omitempty"`
    
}

