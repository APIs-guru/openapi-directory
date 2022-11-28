package shared

import (
	"time"
)

// AdministrativeAction
// Describes a specific Amazon FSx administrative action for the current Windows or Lustre file system.
type AdministrativeAction struct {
	AdministrativeActionType *AdministrativeActionTypeEnum       `json:"AdministrativeActionType,omitempty"`
	FailureDetails           *AdministrativeActionFailureDetails `json:"FailureDetails,omitempty"`
	ProgressPercent          *int64                              `json:"ProgressPercent,omitempty"`
	RequestTime              *time.Time                          `json:"RequestTime,omitempty"`
	Status                   *StatusEnum                         `json:"Status,omitempty"`
	TargetFileSystemValues   *FileSystem                         `json:"TargetFileSystemValues,omitempty"`
	TargetVolumeValues       *Volume                             `json:"TargetVolumeValues,omitempty"`
}
