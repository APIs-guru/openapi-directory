package shared

import (
	"time"
)

type UpdateSystemModelsPackageStatus struct {
	ClientID         *string    `json:"ClientID"`
	ClientKey        *string    `json:"ClientKey"`
	DownloadTime     *string    `json:"DownloadTime"`
	Downloaded       *string    `json:"Downloaded"`
	InstallCompleted *string    `json:"InstallCompleted"`
	InstallResult    *string    `json:"InstallResult"`
	InstallStarted   *string    `json:"InstallStarted"`
	InstallTime      *string    `json:"InstallTime"`
	Percentage       *string    `json:"Percentage"`
	Size             *string    `json:"Size"`
	Timestamp        *time.Time `json:"Timestamp"`
}
