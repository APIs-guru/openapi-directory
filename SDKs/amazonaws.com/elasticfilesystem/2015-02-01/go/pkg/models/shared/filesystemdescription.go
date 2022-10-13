package shared

import (
	"time"
)

type FileSystemDescription struct {
	AvailabilityZoneID           *string             `json:"AvailabilityZoneId"`
	AvailabilityZoneName         *string             `json:"AvailabilityZoneName"`
	CreationTime                 time.Time           `json:"CreationTime"`
	CreationToken                string              `json:"CreationToken"`
	Encrypted                    *bool               `json:"Encrypted"`
	FileSystemArn                *string             `json:"FileSystemArn"`
	FileSystemID                 string              `json:"FileSystemId"`
	KmsKeyID                     *string             `json:"KmsKeyId"`
	LifeCycleState               LifeCycleStateEnum  `json:"LifeCycleState"`
	Name                         *string             `json:"Name"`
	NumberOfMountTargets         int64               `json:"NumberOfMountTargets"`
	OwnerID                      string              `json:"OwnerId"`
	PerformanceMode              PerformanceModeEnum `json:"PerformanceMode"`
	ProvisionedThroughputInMibps *float64            `json:"ProvisionedThroughputInMibps"`
	SizeInBytes                  FileSystemSize      `json:"SizeInBytes"`
	Tags                         []Tag               `json:"Tags"`
	ThroughputMode               *ThroughputModeEnum `json:"ThroughputMode"`
}
