package shared

import (
	"time"
)

// VolumeModification
// <p>Describes the modification status of an EBS volume.</p> <p>If the volume has never been modified, some element values will be null.</p>
type VolumeModification struct {
	EndTime                    *time.Time
	ModificationState          *VolumeModificationStateEnum
	OriginalIops               *int64
	OriginalMultiAttachEnabled *bool
	OriginalSize               *int64
	OriginalThroughput         *int64
	OriginalVolumeType         *VolumeTypeEnum
	Progress                   *int64
	StartTime                  *time.Time
	StatusMessage              *string
	TargetIops                 *int64
	TargetMultiAttachEnabled   *bool
	TargetSize                 *int64
	TargetThroughput           *int64
	TargetVolumeType           *VolumeTypeEnum
	VolumeID                   *string
}
