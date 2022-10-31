package shared

import (
"time")

type UpdateSystemModelsPackageStatus struct {
    ClientID *string `json:"ClientID,omitempty"`
    ClientKey *string `json:"ClientKey,omitempty"`
    DownloadTime *string `json:"DownloadTime,omitempty"`
    Downloaded *string `json:"Downloaded,omitempty"`
    InstallCompleted *string `json:"InstallCompleted,omitempty"`
    InstallResult *string `json:"InstallResult,omitempty"`
    InstallStarted *string `json:"InstallStarted,omitempty"`
    InstallTime *string `json:"InstallTime,omitempty"`
    Percentage *string `json:"Percentage,omitempty"`
    Size *string `json:"Size,omitempty"`
    Timestamp *time.Time `json:"Timestamp,omitempty"`
    
}

