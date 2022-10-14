package shared

import (
	"time"
)

type AdministrativeAction struct {
	AdministrativeActionType *AdministrativeActionTypeEnum       `json:"AdministrativeActionType,omitempty"`
	FailureDetails           *AdministrativeActionFailureDetails `json:"FailureDetails,omitempty"`
	ProgressPercent          *int64                              `json:"ProgressPercent,omitempty"`
	RequestTime              *time.Time                          `json:"RequestTime,omitempty"`
	Status                   *StatusEnum                         `json:"Status,omitempty"`
	TargetFileSystemValues   *FileSystem                         `json:"TargetFileSystemValues,omitempty"`
	TargetVolumeValues       *Volume                             `json:"TargetVolumeValues,omitempty"`
}
