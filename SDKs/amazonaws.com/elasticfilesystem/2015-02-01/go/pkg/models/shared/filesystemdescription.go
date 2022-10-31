package shared

import (
"time")

type FileSystemDescription struct {
    AvailabilityZoneID *string `json:"AvailabilityZoneId,omitempty"`
    AvailabilityZoneName *string `json:"AvailabilityZoneName,omitempty"`
    CreationTime time.Time `json:"CreationTime"`
    CreationToken string `json:"CreationToken"`
    Encrypted *bool `json:"Encrypted,omitempty"`
    FileSystemArn *string `json:"FileSystemArn,omitempty"`
    FileSystemID string `json:"FileSystemId"`
    KmsKeyID *string `json:"KmsKeyId,omitempty"`
    LifeCycleState LifeCycleStateEnum `json:"LifeCycleState"`
    Name *string `json:"Name,omitempty"`
    NumberOfMountTargets int64 `json:"NumberOfMountTargets"`
    OwnerID string `json:"OwnerId"`
    PerformanceMode PerformanceModeEnum `json:"PerformanceMode"`
    ProvisionedThroughputInMibps *float64 `json:"ProvisionedThroughputInMibps,omitempty"`
    SizeInBytes FileSystemSize `json:"SizeInBytes"`
    Tags []Tag `json:"Tags"`
    ThroughputMode *ThroughputModeEnum `json:"ThroughputMode,omitempty"`
    
}

