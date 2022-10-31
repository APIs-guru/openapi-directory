package shared

import (
"time")

type Volume struct {
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    FileSystemID *string `json:"FileSystemId,omitempty"`
    Lifecycle *VolumeLifecycleEnum `json:"Lifecycle,omitempty"`
    LifecycleTransitionReason *LifecycleTransitionReason `json:"LifecycleTransitionReason,omitempty"`
    Name *string `json:"Name,omitempty"`
    OntapConfiguration *OntapVolumeConfiguration `json:"OntapConfiguration,omitempty"`
    ResourceArn *string `json:"ResourceARN,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    VolumeID *string `json:"VolumeId,omitempty"`
    VolumeType *VolumeTypeEnum `json:"VolumeType,omitempty"`
    
}

