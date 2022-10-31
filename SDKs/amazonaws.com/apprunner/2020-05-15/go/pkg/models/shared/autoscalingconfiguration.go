package shared

import (
"time")

type AutoScalingConfiguration struct {
    AutoScalingConfigurationArn *string `json:"AutoScalingConfigurationArn,omitempty"`
    AutoScalingConfigurationName *string `json:"AutoScalingConfigurationName,omitempty"`
    AutoScalingConfigurationRevision *int64 `json:"AutoScalingConfigurationRevision,omitempty"`
    CreatedAt *time.Time `json:"CreatedAt,omitempty"`
    DeletedAt *time.Time `json:"DeletedAt,omitempty"`
    Latest *bool `json:"Latest,omitempty"`
    MaxConcurrency *int64 `json:"MaxConcurrency,omitempty"`
    MaxSize *int64 `json:"MaxSize,omitempty"`
    MinSize *int64 `json:"MinSize,omitempty"`
    Status *AutoScalingConfigurationStatusEnum `json:"Status,omitempty"`
    
}

