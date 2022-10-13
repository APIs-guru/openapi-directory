package shared

import (
	"time"
)

type AdministrativeAction struct {
	AdministrativeActionType *AdministrativeActionTypeEnum       `json:"AdministrativeActionType"`
	FailureDetails           *AdministrativeActionFailureDetails `json:"FailureDetails"`
	ProgressPercent          *int64                              `json:"ProgressPercent"`
	RequestTime              *time.Time                          `json:"RequestTime"`
	Status                   *StatusEnum                         `json:"Status"`
	TargetFileSystemValues   *FileSystem                         `json:"TargetFileSystemValues"`
	TargetVolumeValues       *Volume                             `json:"TargetVolumeValues"`
}
