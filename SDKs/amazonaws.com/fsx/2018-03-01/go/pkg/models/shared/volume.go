package shared

import (
	"time"
)

type Volume struct {
	CreationTime              *time.Time                 `json:"CreationTime"`
	FileSystemID              *string                    `json:"FileSystemId"`
	Lifecycle                 *VolumeLifecycleEnum       `json:"Lifecycle"`
	LifecycleTransitionReason *LifecycleTransitionReason `json:"LifecycleTransitionReason"`
	Name                      *string                    `json:"Name"`
	OntapConfiguration        *OntapVolumeConfiguration  `json:"OntapConfiguration"`
	ResourceArn               *string                    `json:"ResourceARN"`
	Tags                      []Tag                      `json:"Tags"`
	VolumeID                  *string                    `json:"VolumeId"`
	VolumeType                *VolumeTypeEnum            `json:"VolumeType"`
}
