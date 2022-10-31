package shared

import (
"time")

type Build struct {
    BuildArn *string `json:"BuildArn,omitempty"`
    BuildID *string `json:"BuildId,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    Name *string `json:"Name,omitempty"`
    OperatingSystem *OperatingSystemEnum `json:"OperatingSystem,omitempty"`
    SizeOnDisk *int64 `json:"SizeOnDisk,omitempty"`
    Status *BuildStatusEnum `json:"Status,omitempty"`
    Version *string `json:"Version,omitempty"`
    
}

